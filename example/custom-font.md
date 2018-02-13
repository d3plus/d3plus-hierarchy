# Changing Font Styles

The font styles for any component in a d3plus visualization are accessible through nested [labelConfig](http://d3plus.org/docs/#Treemap) methods for each given component. For example, to override the default values passed to the [TextBox](http://d3plus.org/docs/#TextBox) class when constructing the labels associated with shapes:

```js
var data = [
  {id: "alpha", value: 29},
  {id: "beta",  value: 10},
  {id: "gamma", value: 2},
  {id: "delta", value: 29},
  {id: "eta",   value: 25}
];

new d3plus.Treemap()
  .data(data)
  .shapeConfig({
    labelConfig: {
      fontFamily: "serif",
      fontMax: 100
    }
  })
  .render();
```
