# Changing the Treemap Tiling Method

To change the tiling method of a [Treemap](http://d3plus.org/docs/#Treemap), you need to import a specific tiling method from D3 and pass it to the tile property. This example uses the [`treemapDice`](https://github.com/d3/d3-hierarchy#treemapDice) method to create the appearance of a horizontal stacked bar:

```html
<script src="https://d3js.org/d3-hierarchy.v1.min.js"></script>
```

```js
var myData = [
  {"Group": "Store", "Sub-Group": "Convenience Store", "Number of Stores": 100, year: 2018},
  {"Group": "Store", "Sub-Group": "Grocery Store", "Number of Food Stores": 150, year: 2018},
  {"Group": "Store", "Sub-Group": "Farmer's Market", "Number of Food Stores": 50, year: 2018},
  {"Group": "Store", "Sub-Group": "Supercenters", "Number of Food Stores": 30, year: 2018},
  {"Group": "Restaurant", "Sub-Group": "Fast-Food Restaurant", "Number of Food Stores": 60, year: 2018},
  {"Group": "Restaurant", "Sub-Group": "Full-Service Restaurant", "Number of Food Stores": 120, year: 2018}
];

new d3plus.Treemap()
  .config({
    data: myData,
    groupBy: ["Group", "Sub-Group"],
    sum: d => d["Number of Food Stores"],
    tooltipConfig: {
      tbody: [
        ["Total", function(d) { return d["Number of Food Stores"] }], 
        ["Year", function(d) { return d.year }]
      ]
    },
    tile: d3.treemapDice
  })
  .render();
```
