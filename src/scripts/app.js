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
/* Brands slider */

var brandsSlider = tns({
  container: '.brands-container',
  slideBy: 'page',
  autoplay: true,
  autoplayButtonOutput: false,
  nav: false,
  loop: true,
  speed: 4000,
  mouseDrag: true,
  controlsText: false,
  prevButton: '.fa-angle-left',
  nextButton: '.fa-angle-right',
  responsive: {
    450: {
      items: 2
    },
    640: {
      items: 3
    },
    768: {
      items: 4
    },
    995: {
      items: 6
    }
  }
});
