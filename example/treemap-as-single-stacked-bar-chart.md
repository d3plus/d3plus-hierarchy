# Treemap as Single Stacked Barchart

To construct a [Treemap](http://d3plus.org/docs/#Treemap) as a single stacked barchart, you need to import `treemapDice` from D3 library and set it to the tile property, as shown:

```js
<script src="https://d3js.org/d3-hierarchy.v1.min.js"></script>
var treemapDice = d3.treemapDice;

var data = [
  {"Group": "Store", "Sub-Group": "Convenience Store", "Number of Stores": 100, year: 2018},
  {"Group": "Store", "Sub-Group": "Grocery Store", "Number of Food Stores": 150, year: 2018},
  {"Group": "Store", "Sub-Group": "Farmer's Market", "Number of Food Stores": 50, year: 2018},
  {"Group": "Store", "Sub-Group": "Supercenters", "Number of Food Stores": 30, year: 2018},
  {"Group": "Restaurant", "Sub-Group": "Fast-Food Restaurant", "Number of Food Stores": 60, year: 2018},
  {"Group": "Restaurant", "Sub-Group": "Full-Service Restaurant", "Number of Food Stores": 120, year: 2018}
];

new d3plus.Treemap()
  .config({
    data,
    groupBy: ["Group", "Sub-Group"],
    sum: d => d["Number of Food Stores"],
    tooltipConfig: {
      tbody: [["Total", d => d["Number of Food Stores"]], ["Year", d => d.year]]
    },
    tile: treemapDice
  })
  .render();
```
