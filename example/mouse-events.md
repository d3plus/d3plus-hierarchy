# Custom Mouse Events

The mouse events for any visualization in d3plus are accessible through the visualization's [on](http://d3plus.org/docs/#BaseClass.on) method. The functionality mirrors the way that [d3-selection](https://github.com/d3/d3-selection#handling-events) handles events, in that you pass 2 variables: the typename of the event and an anonymous function that is provided the data point associated with the current event:

```js
var data = [
  {id: "alpha", value: 29},
  {id: "beta", value: 10},
  {id: "gamma", value: 2},
  {id: "delta", value: 29},
  {id: "eta", value: 25}
];

new d3plus.Treemap()
  .data(data)
  .groupBy("id")
  .on("click", function(d) {
    alert(d.id + " has been clicked!");
  })
  .sum("value")
  .render();
```
