# Custom Tooltip Contents

The [Tooltip](http://d3plus.org/docs/#Tooltip) class has [body](http://d3plus.org/docs/#Tooltip.body), [footer](http://d3plus.org/docs/#Tooltip.footer), and [title](http://d3plus.org/docs/#Tooltip.title) methods that accept valid HTML strings as the return value to be rendered inside of the tooltip. These methods are accessible through the [tooltipConfig](http://d3plus.org/docs/#Viz.tooltipConfig) method of a visualization.

Additionally, when using these methods in conjunction with a visualization, like the [Treemap](http://d3plus.org/docs/#Treemap) generated here, each function is passed the current data point being interacted with, allowing the returned HTML to contain data specific to the current user interaction.

```css
.tooltip-table {
  width: 100%;
}

.tooltip-table .data {
  text-align: right;
}

.tooltip-footer {
  opacity: 0.5;
}
```

```js
var data = [
  {id: "alpha", value: 29, year: 2010},
  {id: "beta",  value: 10, year: 2010},
  {id: "gamma", value: 2,  year: 2010},
  {id: "delta", value: 29, year: 2010},
  {id: "eta",   value: 25, year: 2010}
];

new d3plus.Treemap()
  .data(data)
  .groupBy("id")
  .tooltipConfig({
    body: function(d) {
      var table = "<table class='tooltip-table'>";
      table += "<tr><td class='title'>Year:</td><td class='data'>" + d.year + "</td></tr>";
      table += "<tr><td class='title'>Value:</td><td class='data'>" + d.value + "</td></tr>";
      table += "</table>";
      return table;
    },
    footer: function(d) {
      return "<sub class='tooltip-footer'>Data Collected in 2012</sub>";
    },
    title: function(d) {
      var txt = d.id;
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
    }
  })
  .sum("value")
  .render();
```
