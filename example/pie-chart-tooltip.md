# Pie Chart Tooltip

To set custom tooltip in a [Pie](http://d3plus.org/docs/#Pie) class, set the `tbody` property of [tooltipConfig](http://d3plus.org/docs/#Viz.tooltipConfig) to an array of 2 values. First item in this array is the label and second item is the label value. Using following data:

```js
var data = [
  {"Group": "Store", "Sub-Group": "Convenience Store", "Number of Stores": 100, year: 2018},
  {"Group": "Store", "Sub-Group": "Grocery Store", "Number of Food Stores": 150, year: 2018},
  {"Group": "Store", "Sub-Group": "Farmer's Market", "Number of Food Stores": 50, year: 2018},
  {"Group": "Store", "Sub-Group": "Supercenters", "Number of Food Stores": 30, year: 2018},
  {"Group": "Restaurant", "Sub-Group": "Fast-Food Restaurant", "Number of Food Stores": 60, year: 2018},
  {"Group": "Restaurant", "Sub-Group": "Full-Service Restaurant", "Number of Food Stores": 120, year: 2018}
];
```
We can create a simple Pie Chart with a custom tooltip:

```js
var myChart = new d3plus.Pie()
  .config({
    data,
    groupBy: ["Group", "Sub-Group"],
    value: d => d["Number of Food Stores"],
    tooltipConfig: {
      tbody: [["Total", d => d["Number of Food Stores"]], ["Year", d => d.year]]
    },
  })
  .render();
```
