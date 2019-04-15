var express = require('express');
var router = express.Router();
const path = require('path');

/* GET users listing. */
router.post('/', function(req, res, next) {


  // Require library
  var xl = require('excel4node');

// Create a new instance of a Workbook class
  var wb = new xl.Workbook();

// Add Worksheets to the workbook
  var ws = wb.addWorksheet('Sheet 1');
  var ws2 = wb.addWorksheet('Sheet 2');

// Create a reusable style
  var style = wb.createStyle({
    font: {
      color: '#FF0800',
      size: 12,
    },
    numberFormat: '$#,##0.00; ($#,##0.00); -',
  });

// Set value of cell A1 to 100 as a number type styled with paramaters of style
  const cells = req.body;
  console.log(cells.length);
  for (let i = 0; i < cells.length; i++) {
      ws.cell(cells[i].col, cells[i].row)
          .string(cells[i].value)
          .style(style);
  }
// Set value of cell B1 to 200 as a number type styled with paramaters of style

    const createdFileName = path.join(__dirname, '../public', 'upload', `${cells[0].fileTitle}.xlsx`);
    // const createdFileName = path.join(__dirname, '../public', 'upload', `${cells[0].value}.xlsx`);

 wb.write(createdFileName);
    console.log(createdFileName);
    setTimeout(() => {
        res.send(`http://localhost:3000/upload/${cells[0].fileTitle}.xlsx`);
    }, 1000)

});

module.exports = router;
