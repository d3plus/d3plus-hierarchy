# Hiding Tooltip on Click

The following example demonstrates using the [on](https://d3plus.org/docs/#BaseClass.on) method to attach a custom event listener that will hide the [Tooltip](https://d3plus.org/docs/#Tooltip) on click events. The click function has access to the tooltip because all of the on events have the internal class binded as `this`.

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
  .groupBy("id")
  .on({
    click: function() {
      if (this._tooltip) {
        this._tooltipClass.data([]).render();
      }
    }
  })
  .sum("value")
  .render();
```
