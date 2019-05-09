# Pie Chart Tooltip

To show data in a [Pie](http://d3plus.org/docs/#Pie) chart tooltip, use the `tbody` property of the [tooltipConfig](http://d3plus.org/docs/#Viz.tooltipConfig) to define each row in a table as an Array of column values.

```js
var myData = [
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
new d3plus.Pie()
  .config({
    data: myData,
    groupBy: ["Group", "Sub-Group"],
    value: function(d) {
      return d["Number of Food Stores"];
    },
    tooltipConfig: {
      tbody: [
        ["Total", function(d) { return d["Number of Food Stores"] }], 
        ["Year", function(d) { return d.year }]
      ]
    },
  })
  .render();
```
