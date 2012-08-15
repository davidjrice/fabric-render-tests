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
      b.src = 'images/inkscape.10a.png';

    })
    

    waitsFor(function (){
      return a.complete & b.complete;
    }, 'image not loaded.', 2000);

    runs(function () {
      console.log(a)
      expect(a).toImageDiffEqual(b);
    });
  });


  // Test
  it('should convert be the same image', function () {

    var
      a = new Image(),
      b = new Image();
    a.src = 'images/fabric.10.png';
    b.src = 'images/inkscape.10a.png';

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
    b.src = 'images/illustrator.1.png';

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
    b.src = 'images/inkscape.1b.png';

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
    b.src = 'images/inkscape.69a.png';

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
    b.src = 'images/webkit.69.png';

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
    b.src = 'images/inkscape.20a.png';

    waitsFor(function () {
      return a.complete & b.complete;
    }, 'image not loaded.', 2000);

    runs(function () {
      expect(a).toImageDiffEqual(b, 10000);
    });
  });
});
