var express = require('express');
var router = express.Router();
const path = require('path');

router.post('/', function(req, res, next) {


  var xl = require('excel4node');

  var wb = new xl.Workbook();

  var ws = wb.addWorksheet('Sheet 1');

  var style = wb.createStyle({
    font: {
      color: '#000000',
      size: 12,
    },
    numberFormat: '0000.0000',
  });
    ws.cell(1, 1)
        .string('Campaign')
        .style(style);
ws.cell(1, 2)
        .string('Campaign Daily Budget')
        .style(style);
ws.cell(1, 3)
        .string('AdGroup')
        .style(style);
ws.cell(1, 4)
        .string('KeyWord')
        .style(style);
ws.cell(1, 5)
        .string('Headline 1')
        .style(style);
ws.cell(1, 6)
        .string('Headline 2')
        .style(style);
ws.cell(1, 7)
        .string('Headline 3')
        .style(style);
ws.cell(1, 8)
        .string('Description 1')
        .style(style);
ws.cell(1, 9)
        .string('Description 2')
        .style(style);
ws.cell(1, 10)
        .string('Final URL')
        .style(style);
ws.cell(1, 11)
        .string('Path 1')
        .style(style);
ws.cell(1, 12)
        .string('Path 2')
        .style(style);
ws.cell(1, 13)
        .string('MaxCpc')
        .style(style);
ws.cell(1, 14)
        .string('Final Mobile URL')
        .style(style);




  const cells = req.body;
  console.log(cells.length);
  for (let i = 0; i < cells.length; i++) {
      ws.cell(cells[i].col, cells[i].row)
          .string(cells[i].value)
          .style(style);
  }

    const createdFileName = path.join(__dirname, '../public', 'upload', `${cells[0].fileTitle}.xlsx`);
    // const createdFileName = path.join(__dirname, '../public', 'upload', `${cells[0].value}.xlsx`);

 wb.write(createdFileName);
    setTimeout(() => {
        res.send(`https://seo-ad-app.herokuapp.com/upload/${cells[0].fileTitle}.xlsx`);
    }, 1000)

});

module.exports = router;
