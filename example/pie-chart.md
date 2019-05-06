# Pie Chart

When constructing data to be used with the [Pie](http://d3plus.org/docs/#Pie) class, there must be a unique data point for each pie. Given this data array:

```js
var data = [
  {"Race": "White Health Center Patients", "Population Percentage": 40, year: 2018},
  {"Race": "Black Health Center Patients", "Population Percentage": 20, year: 2018},
  {"Race": "Hispanic Health Center Patients", "Population Percentage": 25, year: 2018},
  {"Race": "Asian Health Center Patients", "Population Percentage": 10, year: 2018},
  {"Race": "American Indian Health Center Patients", "Population Percentage": 5, year: 2018}
];
```
We can create a simple Pie Chart:

```js
var myChart = new d3plus.Pie()
  .config({
    data,
    groupBy: "Race",
    value: d => d["Population Percentage"]
  })
  .render();
```
