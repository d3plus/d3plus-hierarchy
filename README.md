# d3plus-hierarchy

Nested, hierarchical, and cluster charts built on D3

## Installing

If using npm, `npm install d3plus-hierarchy`. Otherwise, you can download the [latest release from GitHub](https://github.com/d3plus/d3plus-hierarchy/releases/latest) or load from a [CDN](https://cdn.jsdelivr.net/npm/d3plus-hierarchy@1).

```js
import modules from "d3plus-hierarchy";
```

d3plus-hierarchy can be loaded as a standalone library or bundled as part of [D3plus](https://github.com/d3plus/d3plus). ES modules, AMD, CommonJS, and vanilla environments are supported. In vanilla, a `d3plus` global is exported:

```html
<script src="https://cdn.jsdelivr.net/npm/d3plus-hierarchy@1"></script>
<script>
  console.log(d3plus);
</script>
```

## Examples

Live examples can be found on [d3plus.org](https://d3plus.org/), which includes a collection of example visualizations using [d3plus-react](https://github.com/d3plus/d3plus-react/). These examples are powered by the [d3plus-storybook](https://github.com/d3plus/d3plus-storybook/) repo, and PRs are always welcome. :beers:

## API Reference

##### 
* [Donut](#Donut)
* [Pack](#Pack)
* [Pie](#Pie)
* [Tree](#Tree)
* [Treemap](#Treemap)

---

<a name="Donut"></a>
#### **Donut** [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Donut.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Pie</code>](#Pie).


<a name="new_Donut_new" href="#new_Donut_new">#</a> new **Donut**()

Extends the Pie visualization to create a donut chart.




---

<a name="Pack"></a>
#### **Pack** [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Pack.js#L25)


This is a global class, and extends all of the methods and functionality of <code>Viz</code>.


* [Pack](#Pack) ⇐ <code>Viz</code>
    * [new Pack()](#new_Pack_new)
    * [.hover([*value*])](#Pack.hover) ↩︎
    * [.layoutPadding([*value*])](#Pack.layoutPadding)
    * [.packOpacity([*value*])](#Pack.packOpacity)
    * [.sort([*comparator*])](#Pack.sort)
    * [.sum([*value*])](#Pack.sum)


<a name="new_Pack_new" href="#new_Pack_new">#</a> new **Pack**()

Uses the [d3 pack layout](https://github.com/d3/d3-hierarchy#pack) to creates Circle Packing chart based on an array of data.





<a name="Pack.hover" href="#Pack.hover">#</a> Pack.**hover**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Pack.js#L139)

If *value* is specified, sets the hover method to the specified function and returns the current class instance.


This is a static method of [<code>Pack</code>](#Pack), and is chainable with other methods of this Class.


<a name="Pack.layoutPadding" href="#Pack.layoutPadding">#</a> Pack.**layoutPadding**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Pack.js#L152)

If *value* is specified, sets the opacity accessor to the specified function or number and returns the current class instance. If *value* is not specified, returns the current pack opacity accessor.


This is a static method of [<code>Pack</code>](#Pack).


<a name="Pack.packOpacity" href="#Pack.packOpacity">#</a> Pack.**packOpacity**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Pack.js#L161)

If *value* is specified, sets the padding accessor to the specified function or number and returns the current class instance. If *value* is not specified, returns the current pack opacity accessor.


This is a static method of [<code>Pack</code>](#Pack).


<a name="Pack.sort" href="#Pack.sort">#</a> Pack.**sort**([*comparator*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Pack.js#L174)

If *comparator* is specified, sets the sort order for the pack using the specified comparator function. If *comparator* is not specified, returns the current group sort order, which defaults to descending order by the associated input data's numeric value attribute.


This is a static method of [<code>Pack</code>](#Pack).


```js
function comparator(a, b) {
  return b.value - a.value;
}
```


<a name="Pack.sum" href="#Pack.sum">#</a> Pack.**sum**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Pack.js#L188)

If *value* is specified, sets the sum accessor to the specified function or number and returns the current class instance. If *value* is not specified, returns the current sum accessor.


This is a static method of [<code>Pack</code>](#Pack).


```js
function sum(d) {
  return d.sum;
}
```

---

<a name="Pie"></a>
#### **Pie** [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Pie.js#L8)


This is a global class, and extends all of the methods and functionality of <code>Viz</code>.


* [Pie](#Pie) ⇐ <code>Viz</code>
    * [new Pie()](#new_Pie_new)
    * [.innerRadius([*value*])](#Pie.innerRadius)
    * [.padAngle([*value*])](#Pie.padAngle)
    * [.padPixel([*value*])](#Pie.padPixel)
    * [.sort([*comparator*])](#Pie.sort)
    * [.value(*value*)](#Pie.value)


<a name="new_Pie_new" href="#new_Pie_new">#</a> new **Pie**()

Uses the [d3 pie layout](https://github.com/d3/d3-shape#pies) to creates SVG arcs based on an array of data.





<a name="Pie.innerRadius" href="#Pie.innerRadius">#</a> Pie.**innerRadius**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Pie.js#L95)

If *value* is specified, sets the inner radius accessor to the specified function or number and returns the current class instance. If *value* is not specified, returns the current inner radius accessor.


This is a static method of [<code>Pie</code>](#Pie).


<a name="Pie.padAngle" href="#Pie.padAngle">#</a> Pie.**padAngle**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Pie.js#L104)

If *value* is specified, sets the arc padding to the specified radian value and returns the current class instance. If *value* is not specified, returns the current radian padding.


This is a static method of [<code>Pie</code>](#Pie).


<a name="Pie.padPixel" href="#Pie.padPixel">#</a> Pie.**padPixel**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Pie.js#L113)

If *value* is specified, sets the arc padding to the specified pixel value and returns the current class instance. If *value* is not specified, returns the current pixel padding.


This is a static method of [<code>Pie</code>](#Pie).


<a name="Pie.sort" href="#Pie.sort">#</a> Pie.**sort**([*comparator*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Pie.js#L126)

If *comparator* is specified, sets the sort order for the pie slices using the specified comparator function. If *comparator* is not specified, returns the current sort order, which defaults to descending order by the associated input data's numeric value attribute.


This is a static method of [<code>Pie</code>](#Pie).


```js
function comparator(a, b) {
  return b.value - a.value;
}
```


<a name="Pie.value" href="#Pie.value">#</a> Pie.**value**(*value*) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Pie.js#L139)

If *value* is specified, sets the value accessor to the specified function or number and returns the current class instance. If *value* is not specified, returns the current value accessor.


This is a static method of [<code>Pie</code>](#Pie).


```js
function value(d) {
  return d.value;
}
```

---

<a name="Tree"></a>
#### **Tree** [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Tree.js#L11)


This is a global class, and extends all of the methods and functionality of <code>Viz</code>.


* [Tree](#Tree) ⇐ <code>Viz</code>
    * [new Tree()](#new_Tree_new)
    * [.orient([*value*])](#Tree.orient)
    * [.separation([*value*])](#Tree.separation)


<a name="new_Tree_new" href="#new_Tree_new">#</a> new **Tree**()

Uses d3's [tree layout](https://github.com/d3/d3-hierarchy#tree) to create a tidy tree chart based on an array of data.





<a name="Tree.orient" href="#Tree.orient">#</a> Tree.**orient**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Tree.js#L209)

If *value* is specified, sets the orientation to the specified value. If *value* is not specified, returns the current orientation.


This is a static method of [<code>Tree</code>](#Tree).


<a name="Tree.separation" href="#Tree.separation">#</a> Tree.**separation**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Tree.js#L225)

If *value* is specified, sets the separation accessor to the specified function. If *value* is not specified, returns the current separation accessor.

From the [d3-hierarchy documentation](https://github.com/d3/d3-hierarchy#tree_separation):
> The separation accessor is used to separate neighboring nodes. The separation function is passed two nodes a and b, and must return the desired separation. The nodes are typically siblings, though the nodes may be more distantly related if the layout decides to place such nodes adjacent.


This is a static method of [<code>Tree</code>](#Tree).


```js
function separation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}
```

---

<a name="Treemap"></a>
#### **Treemap** [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Treemap.js#L12)


This is a global class, and extends all of the methods and functionality of <code>Viz</code>.


* [Treemap](#Treemap) ⇐ <code>Viz</code>
    * [new Treemap()](#new_Treemap_new)
    * [.layoutPadding([*value*])](#Treemap.layoutPadding)
    * [.sort([*comparator*])](#Treemap.sort)
    * [.sum([*value*])](#Treemap.sum)
    * [.tile([*value*])](#Treemap.tile)


<a name="new_Treemap_new" href="#new_Treemap_new">#</a> new **Treemap**()

Uses the [d3 treemap layout](https://github.com/mbostock/d3/wiki/Treemap-Layout) to creates SVG rectangles based on an array of data. See [this example](https://d3plus.org/examples/d3plus-hierarchy/getting-started/) for help getting started using the treemap generator.





<a name="Treemap.layoutPadding" href="#Treemap.layoutPadding">#</a> Treemap.**layoutPadding**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Treemap.js#L248)

If *value* is specified, sets the inner and outer padding accessor to the specified function or number and returns the current class instance. If *value* is not specified, returns the current padding accessor.


This is a static method of [<code>Treemap</code>](#Treemap).


<a name="Treemap.sort" href="#Treemap.sort">#</a> Treemap.**sort**([*comparator*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Treemap.js#L261)

If *comparator* is specified, sets the sort order for the treemap using the specified comparator function. If *comparator* is not specified, returns the current group sort order, which defaults to descending order by the associated input data's numeric value attribute.


This is a static method of [<code>Treemap</code>](#Treemap).


```js
function comparator(a, b) {
  return b.value - a.value;
}
```


<a name="Treemap.sum" href="#Treemap.sum">#</a> Treemap.**sum**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Treemap.js#L274)

If *value* is specified, sets the sum accessor to the specified function or number and returns the current class instance. If *value* is not specified, returns the current sum accessor.


This is a static method of [<code>Treemap</code>](#Treemap).


```js
function sum(d) {
  return d.sum;
}
```


<a name="Treemap.tile" href="#Treemap.tile">#</a> Treemap.**tile**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Treemap.js#L290)

Sets the tiling method used when calcuating the size and position of the rectangles.

Can either be a string referring to a d3-hierarchy [tiling method](https://github.com/d3/d3-hierarchy#treemap-tiling), or a custom function in the same format.


This is a static method of [<code>Treemap</code>](#Treemap).

---



###### <sub>Documentation generated on Fri, 27 Dec 2024 17:01:05 GMT</sub>
