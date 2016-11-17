# d3plus-hierarchy

[![NPM Release](http://img.shields.io/npm/v/d3plus-hierarchy.svg?style=flat)](https://www.npmjs.org/package/d3plus-hierarchy)
[![Build Status](https://travis-ci.org/d3plus/d3plus-hierarchy.svg?branch=master)](https://travis-ci.org/d3plus/d3plus-hierarchy)
[![Dependency Status](http://img.shields.io/david/d3plus/d3plus-hierarchy.svg?style=flat)](https://david-dm.org/d3plus/d3plus-hierarchy)
[![Slack](https://img.shields.io/badge/Slack-Click%20to%20Join!-green.svg?style=social)](https://goo.gl/forms/ynrKdvusekAwRMPf2)

Nested, hierarchical, and cluster charts built on D3

## Installing

If you use NPM, `npm install d3plus-hierarchy`. Otherwise, download the [latest release](https://github.com/d3plus/d3plus-hierarchy/releases/latest). The released bundle supports AMD, CommonJS, and vanilla environments. Create a [custom bundle using Rollup](https://github.com/rollup/rollup) or your preferred bundler. You can also load directly from [d3plus.org](https://d3plus.org):

```html
<script src="https://d3plus.org/js/d3plus-hierarchy.v0.1.full.min.js"></script>
```


## Getting Started

Creating a tree map using D3plus is super simple. Given an array of data objects that looks something like this:

```js
var data = [
  {parent: "Group 1", id: "alpha", value: 29},
  {parent: "Group 1", id: "beta", value: 10},
  {parent: "Group 1", id: "gamma", value: 2},
  {parent: "Group 2", id: "delta", value: 29},
  {parent: "Group 2", id: "eta", value: 25}
];
```

Only a few lines of code are needed to transform it into an interactive tree map:

```js
new d3plus.Treemap()
  .data(data)
  .groupBy(["parent", "id"])
  .render();
```

Colors are assigned to each unique ID using [d3plus-color](https://github.com/d3plus/d3plus-color#assign), and the rectangles are created using the [d3plus-shape](https://github.com/d3plus/d3plus-shape) module.


[<kbd><img src="/example/getting-started.png" width="990px" /></kbd>](https://d3plus.org/examples/d3plus-hierarchy/getting-started/)

[Click here](https://d3plus.org/examples/d3plus-hierarchy/getting-started/) to view this example live on the web.


### More Examples

 * [Using a Custom Color Accessor](http://d3plus.org/examples/d3plus-hierarchy/custom-color/)<sup> ***New***</sup>
 * [Rendering into a Specific Page Element](http://d3plus.org/examples/d3plus-hierarchy/selecting-container/)<sup> ***New***</sup>

## API Reference
### Classes

<dl>
<dt><a href="#Tree">Tree</a> ⇐ <code>Viz</code></dt>
<dd></dd>
<dt><a href="#Treemap">Treemap</a> ⇐ <code>Viz</code></dt>
<dd></dd>
</dl>

### Functions

<dl>
<dt><a href="#nest
    Extends the base behavior of d3.nest to allow for multiple depth levels.">nest
    Extends the base behavior of d3.nest to allow for multiple depth levels.(*data*, *keys*)</a></dt>
<dd></dd>
</dl>

<a name="Tree"></a>

### Tree ⇐ <code>Viz</code>
**Kind**: global class  
**Extends:** <code>Viz</code>  

* [Tree](#Tree) ⇐ <code>Viz</code>
    * [new Tree()](#new_Tree_new)
    * [.orient([*value*])](#Tree.orient)
    * [.separation([*value*])](#Tree.separation)

<a name="new_Tree_new"></a>

#### new Tree()
Uses d3's [tree layout](https://github.com/d3/d3-hierarchy#tree) to create a tidy tree chart based on an array of data.

<a name="Tree.orient"></a>

#### Tree.orient([*value*])
If *value* is specified, sets the orientation to the specified value. If *value* is not specified, returns the current orientation.

**Kind**: static method of <code>[Tree](#Tree)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [*value*] | <code>String</code> | <code>&quot;vertical&quot;</code> | Accepts either "vertical" or "horizontal". |

<a name="Tree.separation"></a>

#### Tree.separation([*value*])
If *value* is specified, sets the separation method to the specified function. If *value* is not specified, returns the current separation function.

**Kind**: static method of <code>[Tree](#Tree)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>function</code> | 

**Example**  
```js
function separation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}
```
<a name="Treemap"></a>

### Treemap ⇐ <code>Viz</code>
**Kind**: global class  
**Extends:** <code>Viz</code>  

* [Treemap](#Treemap) ⇐ <code>Viz</code>
    * [new Treemap()](#new_Treemap_new)
    * [.padding([*value*])](#Treemap.padding)
    * [.sort([*comparator*])](#Treemap.sort)
    * [.sum([*value*])](#Treemap.sum)
    * [.tile([*value*])](#Treemap.tile)

<a name="new_Treemap_new"></a>

#### new Treemap()
Uses the [d3 treemap layout](https://github.com/mbostock/d3/wiki/Treemap-Layout) to creates SVG rectangles based on an array of data. See [this example](https://d3plus.org/examples/d3plus-hierarchy/getting-started/) for help getting started using the treemap generator.

<a name="Treemap.padding"></a>

#### Treemap.padding([*value*])
If *value* is specified, sets the inner and outer padding accessor to the specified function or number and returns the current class instance. If *value* is not specified, returns the current padding accessor.

**Kind**: static method of <code>[Treemap](#Treemap)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>function</code> &#124; <code>Number</code> | 

<a name="Treemap.sort"></a>

#### Treemap.sort([*comparator*])
If *comparator* is specified, sets the sort order for the treemap using the specified comparator function. If *comparator* is not specified, returns the current group sort order, which defaults to descending order by the associated input data's numeric value attribute.

**Kind**: static method of <code>[Treemap](#Treemap)</code>  

| Param | Type |
| --- | --- |
| [*comparator*] | <code>Array</code> | 

**Example**  
```js
function comparator(a, b) {
  return b.value - a.value;
}
```
<a name="Treemap.sum"></a>

#### Treemap.sum([*value*])
If *value* is specified, sets the sum accessor to the specified function or number and returns the current class instance. If *value* is not specified, returns the current sum accessor.

**Kind**: static method of <code>[Treemap](#Treemap)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>function</code> &#124; <code>Number</code> | 

**Example**  
```js
function sum(d) {
  return d.sum;
}
```
<a name="Treemap.tile"></a>

#### Treemap.tile([*value*])
If *value* is specified, sets the [tiling method](https://github.com/d3/d3-hierarchy#treemap-tiling) to the specified function and returns the current class instance. If *value* is not specified, returns the current [tiling method](https://github.com/d3/d3-hierarchy#treemap-tiling).

**Kind**: static method of <code>[Treemap](#Treemap)</code>  

| Param | Type |
| --- | --- |
| [*value*] | <code>function</code> | 

<a name="nest
    Extends the base behavior of d3.nest to allow for multiple depth levels."></a>

### nest
    Extends the base behavior of d3.nest to allow for multiple depth levels.(*data*, *keys*)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| *data* | <code>Array</code> | The data array to be nested. |
| *keys* | <code>Array</code> | An array of key accessors that signify each nest level. |



###### <sub>Documentation generated on Thu, 17 Nov 2016 02:22:41 GMT</sub>
