# Pie Chart Multiple Grouping

[Pie](http://d3plus.org/docs/#Pie) class can have multiple groupings by setting [groupBy](http://d3plus.org/docs/#Viz.groupBy) property to an array of keys you want to group your data by.

Using following data:

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
We can create a simple Pie Chart by passing an array of 2 keys to groupBy property:

```js
var myChart = new d3plus.Pie()
  .config({
    data,
    groupBy: ["Group", "Sub-Group"],
    value: d => d["Number of Food Stores"]
  })
  .render();
```
