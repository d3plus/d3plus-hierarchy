# Getting Started

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
