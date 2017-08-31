[width]: 500
[height]: 200

# Rendering into a Specific DOM Container

By default, d3plus will render visualizations in a new SVG element appended to the end of page body. This is great for quick tests and examples, but in most cases there will be a specific container on the page that will house the visualization, like so:

```html
<div id="viz"></div>
```

This is usually accompanied by some CSS that gives the element specific positioning and sizing:

```css
#viz {
  height: 200px;
  width: 500px;
}
```

D3plus 1.x used a method called "container" in order to specify where to draw a visualization. In 2.0, this has been switched to [.select( )](http://d3plus.org/docs/#Viz.select), which is more in line with the base D3 nomenclature of selecting page elements. The [.select( )](http://d3plus.org/docs/#Viz.select) method accepts anything that the normal [d3-selection](https://github.com/d3/d3-selection#selecting-elements) would.

```js
var data = [
  {id: "alpha", value: 29},
  {id: "beta",  value: 10}
];

new d3plus.Treemap()
  .data(data)
  .select("#viz")
  .render();
```
