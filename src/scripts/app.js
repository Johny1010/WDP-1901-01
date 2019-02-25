
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

/* Star rating system */
const fullCreamyStar = 'full-creamy';
const fullBlackStar = 'full-black';
const blackOutlineStar = 'black-outline';
const starRating = document.getElementsByClassName('star-rating');

Array.from(starRating).forEach((starGroup, index) => {
  starGroup.addEventListener('click', e => {
    if (e.target === starGroup) {
      return;
    }
    const stars = starGroup.getElementsByClassName('star');
    let foundClickedStar = false;

    Array.from(stars).forEach(star => {
      if (!foundClickedStar) {
        foundClickedStar = star.contains(e.target);
        star.classList.add(fullCreamyStar);
      } else {
        star.classList.remove(fullCreamyStar);
        star.classList.remove(fullBlackStar);
        star.classList.remove(blackOutlineStar);
      }
    });
  });
});
/* Script to slider feedback */
var feedbackSlider = tns({
  container: '.feedback-container',
  mouseDrag: true,
  loop: true,
  items: 1,
  speed: 4000,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  controls: false,
  controlsText: false,
  navContainer: '.feedback-dots'
});
