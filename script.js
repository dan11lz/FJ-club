const gallerySwiper = new Swiper(".gallery-slider", {
  spaceBetween: -170,
  slidesPerGroup: 3,
  pagination: {
    el: ".gallery-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
  },
});

const reviewsSwiper = new Swiper(".reviews-slider", {
  slidesPerView: "auto",
  loop: true,
  pagination: {
    el: ".reviews-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".reviews-next",
    prevEl: ".reviews-prev",
  },
});
