describe('ImageTest', function() {

  // Matchers
  beforeEach(function () {
    this.addMatchers(imagediff.jasmine);
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
