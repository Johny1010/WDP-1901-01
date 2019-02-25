/* TINY SLIDER - NEW FURNITURE */
var productSlider = tns({
  container: '.my-slider',
  items: 1,
  slideBy: 'page',
  loop: true,
  mouseDrag: true,
  speed: 400,
  navContainer: '.product-dots',
  controls: false,
  controlsText: false,
  swipeAngle: false,
  responsive: {
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});
