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