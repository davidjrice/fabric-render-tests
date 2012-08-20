describe('ImageTest', function() {

  // Matchers
  beforeEach(function () {
    this.addMatchers(imagediff.jasmine);
  });

  it('should convert be the same image', function () {

    var svg_url = '/spec/svg/10.svg';
    var canvas = null,
        data   = null;

    var
      a = new Image(),
      b = new Image();

    fabric.loadSVGFromURL(svg_url, function(objects, options){
      var shape = fabric.util.groupSVGElements(objects, options);
      canvas = new fabric.Canvas('canvas-10');
      canvas.setWidth(shape.width);
      canvas.setHeight(shape.height);

      canvas.add(shape).centerObjectH(shape).centerObjectV(shape).renderAll();
      shape.setCoords();
      canvas.calcOffset();
      data = canvas.toDataURL('png');

      a.src = data;
      b.src = 'png/10.png';

    })
    

    waitsFor(function (){
      return a.complete & b.complete;
    }, 'image not loaded.', 2000);

    runs(function () {
      setTimeout(function(){
        console.log(a)
        expect(a).toImageDiffEqual(b);
      }, 2000)
    });
  });


  // Test
  it('should convert be the same image', function () {

    var
      a = new Image(),
      b = new Image();
    a.src = 'images/fabric.10.png';
    b.src = 'png/10.png';

    waitsFor(function () {
      return a.complete & b.complete;
    }, 'image not loaded.', 2000);

    runs(function () {
      expect(a).toImageDiffEqual(b);
    });
  });


  it('should convert be the same image', function () {

    var
      a = new Image(),
      b = new Image();
    a.src = 'images/fabric.1.png';
    b.src = 'png/1.png';

    waitsFor(function () {
      return a.complete & b.complete;
    }, 'image not loaded.', 2000);

    runs(function () {
      expect(a).toImageDiffEqual(b, 1000);
    });
  });

  it('should convert be the same image', function () {

    var
      a = new Image(),
      b = new Image();
    a.src = 'images/fabric.1.png';
    b.src = 'png/1.png';

    waitsFor(function () {
      return a.complete & b.complete;
    }, 'image not loaded.', 2000);

    runs(function () {
      expect(a).toImageDiffEqual(b, 1000);
    });
  });

  it('should convert be the same image', function () {

    var
      a = new Image(),
      b = new Image();
    a.src = 'images/fabric.69.png';
    b.src = 'png/69.png';

    waitsFor(function () {
      return a.complete & b.complete;
    }, 'image not loaded.', 2000);

    runs(function () {
      expect(a).toImageDiffEqual(b);
    });
  });

  it('should convert be the same image', function () {

    var
      a = new Image(),
      b = new Image();
    a.src = 'images/fabric.69.png';
    b.src = 'png/69.png';

    waitsFor(function () {
      return a.complete & b.complete;
    }, 'image not loaded.', 2000);

    runs(function () {
      expect(a).toImageDiffEqual(b);
    });
  });

  it('should convert be the same image', function () {

    var
      a = new Image(),
      b = new Image();
    a.src = 'images/fabric.20.png';
    b.src = 'png/20.png';

    waitsFor(function () {
      return a.complete & b.complete;
    }, 'image not loaded.', 2000);

    runs(function () {
      expect(a).toImageDiffEqual(b, 10000);
    });
  });
});
