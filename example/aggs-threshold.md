# Using Custom Aggregations with Thresholding

When drawing Treemaps with large datasets, sometimes the rectangles with very small values will clutter the bottom right of the visualization with dozens of small illegible rectangles. D3plus contains a [threshold](http://d3plus.org/docs/#Viz.threshold) method that will group together all of the data points whose value is under a certain percent of the overall data total, defined as a number between `0` and `1`. For example, a value of `0.05` would group all data points below 5%.

When doing this, D3plus will try it's best to aggregate all of the data points into a single new data point, but it can only do so much. By default, D3plus will sum all variables with type `Number`, but this behavior can be overwritten using the [aggs](http://d3plus.org/docs/#Viz.aggs) method. This method accepts an `Object` with keys that match keys in your data. The aggreagation function that you pass to this method mimics the behavior of many of the [d3-array](https://github.com/d3/d3-array/) functions: it receives 2 arguements, the `Array` of objects to condense and an accessor function that retrieves the current key's value from a data object. This aggregation function is expected to return the final aggregated value for the given key.

In this example, we are loading population data for each US state, and using the callback of the [data](http://d3plus.org/docs/#Viz.data) to construct a population growth value based on the latest 2 years of data. This growth value is used in the [colorScale](http://d3plus.org/docs/#Viz.colorScale) method to shade each rectangle based on the state's growth. Unfortunately, when using the [threshold](http://d3plus.org/docs/#Viz.threshold) method, D3plus does not know that the "Growth" variable should not be summed, so we need to provide a custom aggregation function to [aggs](http://d3plus.org/docs/#Viz.aggs) to calculate an aggregate growth for the states that are being grouped by the [threshold](http://d3plus.org/docs/#Viz.threshold).

```js
var dataURL = "https://datausa.io/api/data?measures=Population&drilldowns=State&Year=2018,2017";

function dataFormat(response) {

  var latestData = response.data
    .filter(function(d) {
      return d.Year === "2018";
    });
  var prevData = response.data
    .filter(function(d) {
      return d.Year === "2017";
    });

  latestData
    .forEach(function(d) {
      var prev = prevData.filter(function(p) {
        return p["ID State"] === d["ID State"];
      })[0];
      d.Previous = prev.Population;
      d.Growth = (d.Population - d.Previous) / d.Previous * 100;
    });

  return latestData;

}

new d3plus.Treemap()
  .data(dataURL, dataFormat)
  .config({
    aggs: {
      "Growth": function(arr, accessor) {

        var current = arr.reduce(function(sum, d) {
          return sum + d.Population;
        }, 0);
        var previous = arr.reduce(function(sum, d) {
          return sum + d.Previous;
        }, 0);

        return (current - previous) / previous * 100;

      }
    },
    colorScale: "Growth",
    groupBy: "State",
    sum: "Population",
    threshold: 0.0025,
    thresholdName: "States"
  })
  .render();
```
