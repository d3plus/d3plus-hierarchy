# Adding Background Images to Shapes

All of the shapes drawn by d3plus visualizations are instances of  [d3plus-shape](https://github.com/d3plus/d3plus-shape) classes. Any method made available by [d3plus-shape](https://github.com/d3plus/d3plus-shape) is accessible through the [.shapeConfig( )](http://d3plus.org/docs/#Viz.shapeConfig) method, which includes the ability to provide custom background images. Assuming your data points contain URLs of images like so:

```js
var data = [
  {id: "alpha", value: 29, image: "https://datausa.io/static/img/attrs/thing_apple.png"},
  {id: "beta",  value: 10, image: "https://datausa.io/static/img/attrs/thing_fish.png"},
  {id: "gamma", value: 2,  image: "https://datausa.io/static/img/attrs/thing_tomato.png"}
];
```

We can pass an accessor to [backgroundImage](https://github.com/d3plus/d3plus-shape#Shape.backgroundImage) to add images to each square in a [Treemap](http://d3plus.org/docs/#Treemap):

```js
new d3plus.Treemap()
  .data(data)
  .groupBy("id")
  .shapeConfig({
    backgroundImage: function(d) {
      return d.image;
    },
    label: false
  })
  .sum("value")
  .render();
```
