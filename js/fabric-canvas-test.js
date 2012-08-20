function testSVG(id){
  var svg_url = '/svg/'+id+'.svg';
  var canvas = null,
      data   = null;
  var
    a = new Image(),
    b = new Image();

  canvas = new fabric.Canvas('canvas-'+id);

  fabric.loadSVGFromURL(svg_url, function(objects, options){
    var shape = fabric.util.groupSVGElements(objects, options);
    canvas.setWidth(shape.width);
    canvas.setHeight(shape.height);

    canvas.add(shape).centerObjectH(shape).centerObjectV(shape).renderAll();
    shape.setCoords();
    canvas.calcOffset();
    data = canvas.toDataURL('png');
    a.src = data;
    

  })
  b.src = 'png/'+id+'.png';
  

  waits(1000);
  waitsFor(function(){
    return a.complete && b.complete
  }, 2000)

  runs(function () {
    expect(a).toImageDiffEqual(b, 1);
  });
}


describe('ImageTest', function() {

  // Matchers
  beforeEach(function () {
    this.addMatchers(imagediff.jasmine);
  });

  it('1.svg', function() { testSVG(1); });
  it('2.svg', function() { testSVG(2); });
  it('3.svg', function() { testSVG(3); });
  it('4.svg', function() { testSVG(4); });
  it('5.svg', function() { testSVG(5); });
  it('6.svg', function() { testSVG(6); });
  it('7.svg', function() { testSVG(7); });
  it('8.svg', function() { testSVG(8); });
  it('9.svg', function() { testSVG(9); });
  it('10.svg', function() { testSVG(10); });
  it('11.svg', function() { testSVG(11); });
  it('12.svg', function() { testSVG(12); });
  it('13.svg', function() { testSVG(13); });
  it('14.svg', function() { testSVG(14); });
  it('15.svg', function() { testSVG(15); });
  it('16.svg', function() { testSVG(16); });
  it('17.svg', function() { testSVG(17); });
  it('18.svg', function() { testSVG(18); });
  it('19.svg', function() { testSVG(19); });
  it('20.svg', function() { testSVG(20); });
  it('21.svg', function() { testSVG(21); });
  it('22.svg', function() { testSVG(22); });
  it('23.svg', function() { testSVG(23); });
  it('24.svg', function() { testSVG(24); });
  it('25.svg', function() { testSVG(25); });
  it('26.svg', function() { testSVG(26); });
  it('27.svg', function() { testSVG(27); });
  it('28.svg', function() { testSVG(28); });
  it('29.svg', function() { testSVG(29); });
  it('30.svg', function() { testSVG(30); });
  it('31.svg', function() { testSVG(31); });
  it('32.svg', function() { testSVG(32); });
  it('33.svg', function() { testSVG(33); });
  it('34.svg', function() { testSVG(34); });
  it('35.svg', function() { testSVG(35); });
  it('36.svg', function() { testSVG(36); });
  it('37.svg', function() { testSVG(37); });
  it('38.svg', function() { testSVG(38); });
  it('39.svg', function() { testSVG(39); });
  it('40.svg', function() { testSVG(40); });
  it('41.svg', function() { testSVG(41); });
  it('42.svg', function() { testSVG(42); });
  it('43.svg', function() { testSVG(43); });
  it('44.svg', function() { testSVG(44); });
  it('45.svg', function() { testSVG(45); });
  it('46.svg', function() { testSVG(46); });
  it('47.svg', function() { testSVG(47); });
  it('48.svg', function() { testSVG(48); });
  it('49.svg', function() { testSVG(49); });
  it('50.svg', function() { testSVG(50); });
  it('51.svg', function() { testSVG(51); });
  it('52.svg', function() { testSVG(52); });
  it('53.svg', function() { testSVG(53); });
  // it('54.svg', function() { testSVG(54); });
  it('55.svg', function() { testSVG(55); });
  it('56.svg', function() { testSVG(56); });
  it('57.svg', function() { testSVG(57); });
  it('58.svg', function() { testSVG(58); });
  it('59.svg', function() { testSVG(59); });
  it('60.svg', function() { testSVG(60); });
  it('61.svg', function() { testSVG(61); });
  it('62.svg', function() { testSVG(62); });
  it('63.svg', function() { testSVG(63); });
  it('64.svg', function() { testSVG(64); });
  it('65.svg', function() { testSVG(65); });
  // it('66.svg', function() { testSVG(66); });
  it('67.svg', function() { testSVG(67); });
  // it('68.svg', function() { testSVG(68); });
  it('69.svg', function() { testSVG(69); });
  it('70.svg', function() { testSVG(70); });
  it('71.svg', function() { testSVG(71); });
  // it('72.svg', function() { testSVG(72); });
  // it('73.svg', function() { testSVG(73); });
  it('74.svg', function() { testSVG(74); });
  it('75.svg', function() { testSVG(75); });
  it('76.svg', function() { testSVG(76); });
  it('77.svg', function() { testSVG(77); });
  it('78.svg', function() { testSVG(78); });
  it('79.svg', function() { testSVG(79); });
  it('80.svg', function() { testSVG(80); });
  it('81.svg', function() { testSVG(81); });
  it('82.svg', function() { testSVG(82); });
  it('83.svg', function() { testSVG(83); });
  it('84.svg', function() { testSVG(84); });
  it('85.svg', function() { testSVG(85); });
  it('86.svg', function() { testSVG(86); });
  it('87.svg', function() { testSVG(87); });
  it('88.svg', function() { testSVG(88); });
  it('89.svg', function() { testSVG(89); });
  it('90.svg', function() { testSVG(90); });
  it('91.svg', function() { testSVG(91); });
  it('92.svg', function() { testSVG(92); });
  it('93.svg', function() { testSVG(93); });
  it('94.svg', function() { testSVG(94); });
  it('95.svg', function() { testSVG(95); });
  it('96.svg', function() { testSVG(96); });
  it('97.svg', function() { testSVG(97); });
  it('98.svg', function() { testSVG(98); });
  it('99.svg', function() { testSVG(99); });
  it('100.svg', function() { testSVG(100); });
  it('101.svg', function() { testSVG(101); });
  it('102.svg', function() { testSVG(102); });
  it('103.svg', function() { testSVG(103); });
  it('104.svg', function() { testSVG(104); });
  it('105.svg', function() { testSVG(105); });
  // it('106.svg', function() { testSVG(106); });
  it('107.svg', function() { testSVG(107); });
  it('108.svg', function() { testSVG(108); });
  it('109.svg', function() { testSVG(109); });
  it('110.svg', function() { testSVG(110); });
  it('111.svg', function() { testSVG(111); });
  it('112.svg', function() { testSVG(112); });
  it('113.svg', function() { testSVG(113); });
  it('114.svg', function() { testSVG(114); });
  it('115.svg', function() { testSVG(115); });
  it('116.svg', function() { testSVG(116); });
  it('117.svg', function() { testSVG(117); });
  it('118.svg', function() { testSVG(118); });
  it('119.svg', function() { testSVG(119); });
  it('120.svg', function() { testSVG(120); });
  it('121.svg', function() { testSVG(121); });
  it('122.svg', function() { testSVG(122); });
  it('123.svg', function() { testSVG(123); });
  it('124.svg', function() { testSVG(124); });
  it('125.svg', function() { testSVG(125); });
  it('126.svg', function() { testSVG(126); });
  it('127.svg', function() { testSVG(127); });
  it('128.svg', function() { testSVG(128); });
  it('129.svg', function() { testSVG(129); });
  it('130.svg', function() { testSVG(130); });
  it('131.svg', function() { testSVG(131); });
  it('132.svg', function() { testSVG(132); });
  it('133.svg', function() { testSVG(133); });
  it('134.svg', function() { testSVG(134); });
  it('135.svg', function() { testSVG(135); });
  it('136.svg', function() { testSVG(136); });
  it('137.svg', function() { testSVG(137); });
  it('138.svg', function() { testSVG(138); });
  it('139.svg', function() { testSVG(139); });
  it('140.svg', function() { testSVG(140); });
  it('141.svg', function() { testSVG(141); });
  it('142.svg', function() { testSVG(142); });
  it('143.svg', function() { testSVG(143); });
  it('144.svg', function() { testSVG(144); });
  it('145.svg', function() { testSVG(145); });
  it('146.svg', function() { testSVG(146); });
  it('147.svg', function() { testSVG(147); });
  it('148.svg', function() { testSVG(148); });
  it('149.svg', function() { testSVG(149); });
  // it('150.svg', function() { testSVG(150); });
});
