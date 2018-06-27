# d3plus-hierarchy

[![NPM Release](http://img.shields.io/npm/v/d3plus-hierarchy.svg?style=flat)](https://www.npmjs.org/package/d3plus-hierarchy) [![Build Status](https://travis-ci.org/d3plus/d3plus-hierarchy.svg?branch=master)](https://travis-ci.org/d3plus/d3plus-hierarchy) [![Dependency Status](http://img.shields.io/david/d3plus/d3plus-hierarchy.svg?style=flat)](https://david-dm.org/d3plus/d3plus-hierarchy) [![Gitter](https://img.shields.io/badge/-chat_on_gitter-brightgreen.svg?style=flat&logo=gitter-white)](https://gitter.im/d3plus/) [![1.0 progress](https://img.shields.io/badge/1.0_progress-33%25-orange.svg?style=flat)](https://github.com/d3plus/d3plus-hierarchy/projects/1)

Nested, hierarchical, and cluster charts built on D3

## Installing

If you use NPM, run `npm install d3plus-hierarchy --save`. Otherwise, download the [latest release](https://github.com/d3plus/d3plus-hierarchy/releases/latest). The released bundle supports AMD, CommonJS, and vanilla environments. You can also load directly from [d3plus.org](https://d3plus.org):

```html
<script src="https://d3plus.org/js/d3plus-hierarchy.v0.6.full.min.js"></script>
```


## Simple Tree Map

Creating a tree map using d3plus is super simple. Given an array of data objects that looks something like this:

```js
var data = [
  {parent: "Group 1", id: "alpha", value: 29},
  {parent: "Group 1", id: "beta", value: 10},
  {parent: "Group 1", id: "gamma", value: 2},
  {parent: "Group 2", id: "delta", value: 29},
  {parent: "Group 2", id: "eta", value: 25}
];
```

Only a few lines of code are needed to transform it into an interactive [TreeMap](http://d3plus.org/docs/#Treemap):

```js
new d3plus.Treemap()
  .data(data)
  .groupBy(["parent", "id"])
  .sum("value")
  .render();
```

Colors are assigned to each unique ID using the color [assign](http://d3plus.org/docs/#assign) function, and the rectangles are created using the [Rect](http://d3plus.org/docs/#Rect) class.


[<kbd><img src="/example/getting-started.png" width="990px" /></kbd>](https://d3plus.org/examples/d3plus-hierarchy/getting-started/)

[Click here](https://d3plus.org/examples/d3plus-hierarchy/getting-started/) to view this example live on the web.


### More Examples

 * [Hiding Tooltip on Click](http://d3plus.org/examples/d3plus-hierarchy/hiding-tooltip-on-click/)
 * [Adding Background Images to Shapes](http://d3plus.org/examples/d3plus-hierarchy/background-image/)
 * [Changing Font Styles](http://d3plus.org/examples/d3plus-hierarchy/custom-font/)
 * [Custom Tooltip Contents](http://d3plus.org/examples/d3plus-hierarchy/tooltip-contents/)
 * [Custom Mouse Events](http://d3plus.org/examples/d3plus-hierarchy/mouse-events/)
 * [Rendering into a Specific DOM Container](http://d3plus.org/examples/d3plus-hierarchy/selecting-container/)
 * [Defining Custom Colors for a Visualization](http://d3plus.org/examples/d3plus-hierarchy/custom-color/)

## API Reference

##### 
* [Donut](#Donut)
* [Pie](#Pie)
* [Tree](#Tree)
* [Treemap](#Treemap)

##### 
* [nest](#nest) - Extends the base behavior of d3.nest to allow for multiple depth levels.

---

<a name="Donut"></a>
#### **Donut** [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Donut.js#L4)


This is a global class, and extends all of the methods and functionality of [<code>Pie</code>](#Pie).


<a name="new_Donut_new" href="#new_Donut_new">#</a> new **Donut**()

Extends the Pie visualization to create a donut chart.




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





<a name="Pie.innerRadius" href="#Pie.innerRadius">#</a> Pie.**innerRadius**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Pie.js#L92)

If *value* is specified, sets the inner radius accessor to the specified function or number and returns the current class instance. If *value* is not specified, returns the current inner radius accessor.


This is a static method of [<code>Pie</code>](#Pie).


<a name="Pie.padAngle" href="#Pie.padAngle">#</a> Pie.**padAngle**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Pie.js#L101)

If *value* is specified, sets the arc padding to the specified radian value and returns the current class instance. If *value* is not specified, returns the current radian padding.


This is a static method of [<code>Pie</code>](#Pie).


<a name="Pie.padPixel" href="#Pie.padPixel">#</a> Pie.**padPixel**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Pie.js#L110)

If *value* is specified, sets the arc padding to the specified pixel value and returns the current class instance. If *value* is not specified, returns the current pixel padding.


This is a static method of [<code>Pie</code>](#Pie).


<a name="Pie.sort" href="#Pie.sort">#</a> Pie.**sort**([*comparator*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Pie.js#L123)

If *comparator* is specified, sets the sort order for the pie slices using the specified comparator function. If *comparator* is not specified, returns the current sort order, which defaults to descending order by the associated input data's numeric value attribute.


This is a static method of [<code>Pie</code>](#Pie).


```js
function comparator(a, b) {
  return b.value - a.value;
}
```


<a name="Pie.value" href="#Pie.value">#</a> Pie.**value**(*value*) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Pie.js#L136)

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





<a name="Tree.orient" href="#Tree.orient">#</a> Tree.**orient**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Tree.js#L208)

If *value* is specified, sets the orientation to the specified value. If *value* is not specified, returns the current orientation.


This is a static method of [<code>Tree</code>](#Tree).


<a name="Tree.separation" href="#Tree.separation">#</a> Tree.**separation**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Tree.js#L224)

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
#### **Treemap** [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Treemap.js#L8)


This is a global class, and extends all of the methods and functionality of <code>Viz</code>.


* [Treemap](#Treemap) ⇐ <code>Viz</code>
    * [new Treemap()](#new_Treemap_new)
    * [.layoutPadding([*value*])](#Treemap.layoutPadding)
    * [.sort([*comparator*])](#Treemap.sort)
    * [.sum([*value*])](#Treemap.sum)
    * [.tile([*value*])](#Treemap.tile)


<a name="new_Treemap_new" href="#new_Treemap_new">#</a> new **Treemap**()

Uses the [d3 treemap layout](https://github.com/mbostock/d3/wiki/Treemap-Layout) to creates SVG rectangles based on an array of data. See [this example](https://d3plus.org/examples/d3plus-hierarchy/getting-started/) for help getting started using the treemap generator.





<a name="Treemap.layoutPadding" href="#Treemap.layoutPadding">#</a> Treemap.**layoutPadding**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Treemap.js#L132)

If *value* is specified, sets the inner and outer padding accessor to the specified function or number and returns the current class instance. If *value* is not specified, returns the current padding accessor.


This is a static method of [<code>Treemap</code>](#Treemap).


<a name="Treemap.sort" href="#Treemap.sort">#</a> Treemap.**sort**([*comparator*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Treemap.js#L145)

If *comparator* is specified, sets the sort order for the treemap using the specified comparator function. If *comparator* is not specified, returns the current group sort order, which defaults to descending order by the associated input data's numeric value attribute.


This is a static method of [<code>Treemap</code>](#Treemap).


```js
function comparator(a, b) {
  return b.value - a.value;
}
```


<a name="Treemap.sum" href="#Treemap.sum">#</a> Treemap.**sum**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Treemap.js#L158)

If *value* is specified, sets the sum accessor to the specified function or number and returns the current class instance. If *value* is not specified, returns the current sum accessor.


This is a static method of [<code>Treemap</code>](#Treemap).


```js
function sum(d) {
  return d.sum;
}
```


<a name="Treemap.tile" href="#Treemap.tile">#</a> Treemap.**tile**([*value*]) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/Treemap.js#L167)

If *value* is specified, sets the [tiling method](https://github.com/d3/d3-hierarchy#treemap-tiling) to the specified function and returns the current class instance. If *value* is not specified, returns the current [tiling method](https://github.com/d3/d3-hierarchy#treemap-tiling).


This is a static method of [<code>Treemap</code>](#Treemap).

---

<a name="nest"></a>
#### d3plus.**nest**(*data*, *keys*) [<>](https://github.com/d3plus/d3plus-hierarchy/blob/master/src/nest.js#L3)


This is a global function.

| Param | Type | Description |
| --- | --- | --- |
| *data* | <code>Array</code> | The data array to be nested. |
| *keys* | <code>Array</code> | An array of key accessors that signify each nest level. |


---



###### <sub>Documentation generated on Wed, 27 Jun 2018 17:45:25 GMT</sub>
