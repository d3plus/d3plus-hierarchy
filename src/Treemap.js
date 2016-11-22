import {nest} from "d3-collection";
import {hierarchy, treemap, treemapSquarify} from "d3-hierarchy";

import {accessor, assign, constant, elem, merge} from "d3plus-common";
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

    this._padding = 1;
    this._shapeConfig = assign({}, this._shapeConfig, {
      fontResize: true,
      Rect: {
        height: d => d.y1 - d.y0,
        labelBounds: (d, i, s) => {
          const h = s.height;
          const sh = Math.min(50, h * 0.25);
          return [
            {width: s.width, height: h - sh, x: -s.width / 2, y: -h / 2},
            {width: s.width, height: sh, x: -s.width / 2, y: h / 2 - sh}
          ];
        },
        width: d => d.x1 - d.x0
      },
      textAnchor: ["start", "middle"],
      verticalAlign: ["top", "bottom"]
    });
    this._sort = (a, b) => b.value - a.value;
    this._sum = accessor("value");
    this._tile = treemapSquarify;
    this._treemap = treemap().round(true);

  }

  /**
      Extends the render behavior of the abstract Viz class.
      @private
  */
  render(callback) {

    super.render(callback);

    let nestedData = nest();
    for (let i = 0; i <= this._drawDepth; i++) nestedData.key(this._groupBy[i]);
    nestedData = nestedData.entries(this._filteredData);

    const tmapData = this._treemap
      .padding(this._padding)
      .size([
        this._width - this._margin.left - this._margin.right,
        this._height - this._margin.top - this._margin.bottom
      ])
      .tile(this._tile)
      (hierarchy({values: nestedData}, d => d.values).sum(this._sum).sort(this._sort));

    const shapeData = [], that = this;

    /**
        Flattens and merges treemap data.
        @private
    */
    function extractLayout(children) {
      for (let i = 0; i < children.length; i++) {
        const node = children[i];
        if (node.depth <= that._drawDepth) extractLayout(node.children);
        else {
          node.__d3plus__ = true;
          node.id = node.data.key;
          node.data = merge(node.data.values);
          node.i = i;
          node.x = node.x0 + (node.x1 - node.x0) / 2;
          node.y = node.y0 + (node.y1 - node.y0) / 2;
          shapeData.push(node);
        }
      }
    }
    if (tmapData.children) extractLayout(tmapData.children);
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
      .config(this._shapeConfigPrep("Rect"))
      .render());

    return this;

  }

  /**
      @memberof Treemap
      @desc If *value* is specified, sets the inner and outer padding accessor to the specified function or number and returns the current class instance. If *value* is not specified, returns the current padding accessor.
      @param {Function|Number} [*value*]
  */
  padding(_) {
    return arguments.length
         ? (this._padding = typeof _ === "function" ? _ : constant(_), this)
         : this._padding;
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
    return arguments.length
         ? (this._sort = _, this)
         : this._sort;
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
    return arguments.length
         ? (this._sum = typeof _ === "function" ? _ : constant(_), this)
         : this._sum;
  }

  /**
      @memberof Treemap
      @desc If *value* is specified, sets the [tiling method](https://github.com/d3/d3-hierarchy#treemap-tiling) to the specified function and returns the current class instance. If *value* is not specified, returns the current [tiling method](https://github.com/d3/d3-hierarchy#treemap-tiling).
      @param {Function} [*value*]
  */
  tile(_) {
    return arguments.length
         ? (this._tile = _, this)
         : this._tile;
  }

}
