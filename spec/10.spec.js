// var
//   // fabric    = require('fabric').fabric,
//   imagediff = require('imagediff'),
//   fs        = require('fs');
// 
// describe('fabric.js', function() {
// 
//   // Matchers
//   beforeEach(function () {
//     // this.addMatchers(imagediff.jasmine);
//   });
// 
//   // Test
//   it('comparing 10.png with 10.svg render through fabric, should be true', function () {
//     // var img = new fabric.Canvas.Image();
//     // 
//     
//     var svg = fs.readFileSync('./spec/svg/10.svg').toString();
// 
// 
//     // console.log(img.width);
//     // console.log(img.height);
//     var f = require('fabric').fabric.createCanvasForNode(300,300);
//     var g = require('fabric').fabric.loadSVGFromString(svg);
// 
//     var data = f.toDataURL('png');
// 
//     var Canvas = require('canvas');
//     var img = new Canvas.Image()
//     img.src = fs.readFileSync('./spec/png/10.png');
// 
//     var c = new Canvas(img.width, img.height);
//     var c_context = c.getContext('2d');
//     c_context.drawImage(img, 0, 0, img.width / 4, img.height / 4);
// 
// 
//     var render = new Canvas.Image();
//     render.src = data;
// 
//     render_canvas = new Canvas(render.width, render.height);
//     var render_context = render_canvas.getContext('2d');
//     render_context.drawImage(render, 0, 0, render.width / 4, render.height / 4);
//     
//     // f.setWidth(img.width);
//     // f.setHeight(img.height);
//   
//     // console.log(f);
// 
//     var a = imagediff.toImageData(c);
//     var b = imagediff.toImageData(render_canvas);
//     //var diff = imagediff.diff(a,b);
//     // console.log(diff);
// 
//     //console.log(b);
//     
//     //   
//     // var
//     //   imgb = new Canvas.Image(),
//     // 
//     // imgb.src = data;
//     // 
//     // var d = new Canvas(imgb.width, imgb.height);
//     // var d_context = d.getContext('2d');
//     // d_context.drawImage(imgb, 0, 0, imgb.width / 4, imgb.height / 4);
//     runs(function(){
//       expect(imagediff.equal(c, render_canvas)).toEqual(true);
//     })
//   });
// })