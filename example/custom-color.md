# Defining Custom Colors for a Visualization

Let's take our [Getting Started](http://d3plus.org/examples/d3plus-hierarchy/getting-started/) example and color the rectangles by their parent groups.

```js
var data = [
  {color: "cornflowerblue", parent: "Group 1", id: "alpha", value: 29},
  {color: "cornflowerblue", parent: "Group 1", id: "beta", value: 10},
  {color: "cornflowerblue", parent: "Group 1", id: "gamma", value: 2},
  {color: "firebrick", parent: "Group 2", id: "delta", value: 29},
  {color: "firebrick", parent: "Group 2", id: "eta", value: 25}
];
```

Given the new `"color"` variable present in each data point, we can tell the [TreeMap](http://d3plus.org/docs/#Treemap) class to use our specific color for each rectangle's fill attribute. All of methods that the [Rect](http://d3plus.org/docs/#Rect) class makes available are accessible via the [.shapeConfig( )](http://d3plus.org/docs/#Viz.shapeConfig) method:

```js
new d3plus.Treemap()
  .data(data)
  .groupBy(["parent", "id"])
  .shapeConfig({fill: function(d) { return d.color; }})
  .render();
```
