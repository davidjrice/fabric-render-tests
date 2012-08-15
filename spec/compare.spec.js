// var
//   // fabric    = require('fabric'),
//   imagediff = require('imagediff'),
//   Canvas    = require('canvas'),
//   fs        = require('fs');
// 
// describe('fabric.js', function() {
// 
//   // Matchers
//   beforeEach(function () {
//     this.addMatchers(imagediff.jasmine);
//   });
// 
//   // Test
//   it('comparing 1.png with itself, should be true', function () {
// 
//     var
//       a = new Canvas.Image(),
//       b = new Canvas.Image();
// 
//     a.src = fs.readFileSync('./spec/png/10.png');
//     b.src = fs.readFileSync('./out.png');
// 
//     var c = new Canvas(a.width, a.height);
//     var c_context = c.getContext('2d');
//     c_context.drawImage(a, 0, 0, a.width / 4, a.height / 4);
//             
//     var d = new Canvas(b.width, b.height);
//     var d_context = d.getContext('2d');
//     d_context.drawImage(b, 0, 0, b.width / 4, b.height / 4);
// 
//     expect(imagediff.equal(c, d)).toEqual(true);
//   });
// 
// })