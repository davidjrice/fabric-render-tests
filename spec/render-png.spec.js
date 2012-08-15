// var
//   fabric    = require('fabric').fabric,
//   fs        = require('fs');

// describe('fabric.js', function() {

//   it('output.png', function () {
//     var svg = fs.readFileSync('./spec/svg/10.svg').toString();
//     fabric.loadSVGFromString(svg, function(objects, options){
//       var shape = fabric.util.groupSVGElements(objects, options);

//       var canvas = fabric.createCanvasForNode(shape.width, shape.height);

//       canvas.add(shape).centerObjectH(shape).centerObjectV(shape).renderAll();
//       //shape.setCoords();
//       canvas.calcOffset();

//       var data = canvas.toDataURL('png');

//       var base64Data = data.replace(/^data:image\/png;base64,/,"");
//       var dataBuffer = new Buffer(base64Data, 'base64');

//       fs.writeFile("out.png", dataBuffer, function(err) {
//         console.log(err);
//       });
//       expect(fs.readFileSync("out.png").length()).toEqual(0);
//     });
//   });
// })