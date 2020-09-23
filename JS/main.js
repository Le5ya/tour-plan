var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  effect: "coverflow",
  keyboard: {
    enabled: true,
    onlyViewport: false,
  },
});
var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--prev",
    prevEl: ".shotel-slider__button--next",
  },
  keyboard: {
    enabled: true,
    onlyViewport: false,
  },
});
