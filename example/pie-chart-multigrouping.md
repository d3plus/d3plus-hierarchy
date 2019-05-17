# Pie Chart Grouping

To show groupings in a [Pie](http://d3plus.org/docs/#Pie) chart, set the [groupBy](http://d3plus.org/docs/#Viz.groupBy) property to an array of keys you want to group the data by.

```js
var myData = [
  {"Group": "Store", "Sub-Group": "Convenience Store", "Number of Food Stores": 100},
  {"Group": "Store", "Sub-Group": "Grocery Store", "Number of Food Stores": 150},
  {"Group": "Store", "Sub-Group": "Farmer's Market", "Number of Food Stores": 50},
  {"Group": "Store", "Sub-Group": "Supercenters", "Number of Food Stores": 30},
  {"Group": "Restaurant", "Sub-Group": "Fast-Food Restaurant", "Number of Food Stores": 60},
  {"Group": "Restaurant", "Sub-Group": "Full-Service Restaurant", "Number of Food Stores": 120}
];

new d3plus.Pie()
  .config({
    data: myData,
    groupBy: ["Group", "Sub-Group"],
    value: function(d) {
      return d["Number of Food Stores"];
    }
  })
  .render();
```
