import {sum} from "d3-array";
import {nest} from "d3-collection";
import {hierarchy, treemap, treemapSquarify} from "d3-hierarchy";

import {accessor, assign, configPrep, constant, elem, merge} from "d3plus-common";
import {Rect} from "d3plus-shape";
import {Viz} from "d3plus-viz";

/**
    @class Treemap
    @extends Viz
    @desc Uses the [d3 treemap layout](https://github.com/mbostock/d3/wiki/Treemap-Layout) to creates SVG rectangles based on an array of data. See [this example](https://d3plus.org/examples/d3plus-hierarchy/getting-started/) for help getting started using the treemap generator.
*/
export default class Treemap extends Viz {

  /**
      @memberof Treemap
      @desc Invoked when creating a new class instance, and sets any default parameters.
      @private
  */
  constructor() {

    super();

    this._layoutPadding = 1;
    this._shapeConfig = assign({}, this._shapeConfig, {
      ariaLabel: (d, i) => {
        const rank = this._rankData ? `${this._rankData.indexOf(d) + 1}. ` : "";
        return `${rank}${this._drawLabel(d, i)}, ${this._sum(d, i)}.`;
      },
      labelConfig: {
        fontMax: 20,
        fontResize: true,
        padding: 15
      }
    });
    this._sort = (a, b) => {
      const aggA = isAggregated(a);
      const aggB = isAggregated(b);
      return aggA && !aggB ? 1 : !aggA && aggB ? -1 : b.value - a.value;
    };
    this._sum = accessor("value");
    this._thresholdKey = this._sum;
    this._tile = treemapSquarify;
    this._treemap = treemap().round(true);

    const isAggregated = (leaf) => leaf.children && leaf.children.length === 1 && leaf.children[0].data._isAggregation;

  }

  /**
      @memberof Treemap
      @desc Extends the draw behavior of the abstract Viz class.
      @private
  */
  _draw(callback) {

    super._draw(callback);
    
    let nestedData = nest();
    for (let i = 0; i <= this._drawDepth; i++) nestedData.key(this._groupBy[i]);
    nestedData = nestedData.entries(this._filteredData);

    const tmapData = this._treemap
      .padding(this._layoutPadding)
      .size([
        this._width - this._margin.left - this._margin.right,
        this._height - this._margin.top - this._margin.bottom
      ])
      .tile(this._tile)
      (hierarchy({values: nestedData}, d => d.values).sum(this._sum).sort(this._sort));

    const shapeData = [], that = this;

    /**
        @memberof Treemap
        @desc Flattens and merges treemap data.
        @private
    */
    function extractLayout(children) {
      for (let i = 0; i < children.length; i++) {
        const node = children[i];
        if (node.depth <= that._drawDepth) extractLayout(node.children);
        else {
          const index = node.data.values.length === 1 ? that._filteredData.indexOf(node.data.values[0]) : undefined;
          node.__d3plus__ = true;
          node.id = node.data.key;
          node.i = index > -1 ? index : undefined;
          node.data = merge(node.data.values);
          node.x = node.x0 + (node.x1 - node.x0) / 2;
          node.y = node.y0 + (node.y1 - node.y0) / 2;
          shapeData.push(node);
        }
      }
    }
    if (tmapData.children) extractLayout(tmapData.children);

    this._rankData = shapeData.sort(this._sort).map(d => d.data);
    const total = tmapData.value;

    const transform = `translate(${this._margin.left}, ${this._margin.top})`;
    this._shapes.push(new Rect()
      .data(shapeData)
      .label(d => [
        this._drawLabel(d.data, d.i),
        `${Math.round(this._sum(d.data, d.i) / total * 100)}%`
      ])
      .select(elem("g.d3plus-Treemap", {
        parent: this._select,
        enter: {transform},
        update: {transform}
      }).node())
      .config({
        height: d => d.y1 - d.y0,
        labelBounds: (d, i, s) => {
          const h = s.height;
          const sh = Math.min(50, h * 0.25);
          return [
            {width: s.width, height: h - sh, x: -s.width / 2, y: -h / 2},
            {width: s.width, height: sh, x: -s.width / 2, y: h / 2 - sh}
          ];
        },
        labelConfig: {
          textAnchor: d => d.l ? "middle" : "start",
          verticalAlign: d => d.l ? "bottom" : "top"
        },
        width: d => d.x1 - d.x0
      })
      .config(configPrep.bind(this)(this._shapeConfig, "shape", "Rect"))
      .render());

    return this;

  }

  /**
   * Applies the threshold algorithm for Treemaps.
   * @param {Array} data The data to process.
   */
  _thresholdFunction(data, tree) {
    if (this._threshold && this._thresholdKey) {
      const aggs = this._aggs;
      const drawDepth = this._drawDepth;
      const groupBy = this._groupBy;
      const threshold = this._threshold;
      const thresholdKey = this._thresholdKey;

      const flatData = data.slice();
      const totalSum = sum(flatData, thresholdKey);

      function thresholdByDepth(values, branch, depth) {
        if (depth >= drawDepth) return;

        const accesor = groupBy[depth];
        const nextValues = values.filter(item => accesor(item) === branch.key);

        values.forEach(item => {
          console.log(item.Year);
        })

        if (depth + 1 === drawDepth) {
          const removedItems = [];
          const thresholdPercent = Math.min(1, Math.max(0, threshold(nextValues)));

          if (!isFinite(thresholdPercent) || isNaN(thresholdPercent)) return;

          const thresholdValue = thresholdPercent * totalSum;

          let n = nextValues.length;
          while (n--) {
            const item = nextValues[n];
            if (thresholdKey(item) < thresholdValue) {
              const index = flatData.indexOf(item);
              flatData.splice(index, 1);
              removedItems.push(item);
            }
          }

          if (removedItems.length > 0) {
            const mergedItem = merge(removedItems, aggs);
            mergedItem._isAggregation = true;
            mergedItem._threshold = thresholdPercent;
            flatData.push(mergedItem);
          }
        }
        else {
          const leaves = branch.values;
          let n = leaves.length;
          while (n--) {
            thresholdByDepth(nextValues, leaves[n], depth + 1);
          }
        }
      }

      tree.forEach(branch => thresholdByDepth(flatData, branch, 0));

      return flatData;
    }

    return data;
  }

  /**
      @memberof Treemap
      @desc If *value* is specified, sets the inner and outer padding accessor to the specified function or number and returns the current class instance. If *value* is not specified, returns the current padding accessor.
      @param {Function|Number} [*value*]
  */
  layoutPadding(_) {
    return arguments.length ? (this._layoutPadding = typeof _ === "function" ? _ : constant(_), this) : this._layoutPadding;
  }

  /**
      @memberof Treemap
      @desc If *comparator* is specified, sets the sort order for the treemap using the specified comparator function. If *comparator* is not specified, returns the current group sort order, which defaults to descending order by the associated input data's numeric value attribute.
      @param {Array} [*comparator*]
      @example
function comparator(a, b) {
  return b.value - a.value;
}
  */
  sort(_) {
    return arguments.length ? (this._sort = _, this) : this._sort;
  }

  /**
      @memberof Treemap
      @desc If *value* is specified, sets the sum accessor to the specified function or number and returns the current class instance. If *value* is not specified, returns the current sum accessor.
      @param {Function|Number} [*value*]
      @example
function sum(d) {
  return d.sum;
}
  */
  sum(_) {
    if (arguments.length) {
      this._sum = typeof _ === "function" ? _ : accessor(_);
      this._thresholdKey = this._sum;
      return this;
    }
    else return this._sum;
  }

  /**
      @memberof Treemap
      @desc If *value* is specified, sets the [tiling method](https://github.com/d3/d3-hierarchy#treemap-tiling) to the specified function and returns the current class instance. If *value* is not specified, returns the current [tiling method](https://github.com/d3/d3-hierarchy#treemap-tiling).
      @param {Function} [*value*]
  */
  tile(_) {
    return arguments.length ? (this._tile = _, this) : this._tile;
  }

}
