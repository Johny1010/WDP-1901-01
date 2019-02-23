/* TINY SLIDER - NEW FURNITURE */

const slider = tns({
  container: '.my-slider',
  items: 1,
  slideBy: 'page',
  controls: false,
  mouseDrag: true,
  speed: 400,
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
