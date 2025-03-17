const gallerySwiper = new Swiper(".gallery-slider", {
  spaceBetween: -170,
  slidesPerGroup: 3,
  loop: true,
  pagination: {
    el: ".gallery-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
  },
  breakpoints: {
    320: {
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

const registrationBtn = document.getElementById("registration-btn");
const registrationPopup = document.getElementById("registration-popup");
const registrationForm = document.getElementById("registration-form");

const openPopup = () => {
  registrationPopup.classList.add("open");
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
};

const closePopup = () => {
  registrationPopup.classList.remove("open");
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
  registrationForm.reset();
};

registrationBtn.addEventListener("click", openPopup);

registrationPopup.addEventListener("click", (e) => {
  if (e.target === registrationPopup) closePopup();
});

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  closePopup();
});

// media

const burgerBtn = document.getElementById("burger-menu");
const navMenu = document.getElementById("header-nav");
const headerNavLinks = document.querySelectorAll(".header__nav-link");
const toggleMenu = () => {
  burgerBtn.classList.toggle("header__burger_open");
  navMenu.classList.toggle("header__nav_active");
};

burgerBtn.addEventListener("click", toggleMenu);

document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
    burgerBtn.classList.remove("header__burger_open");
    navMenu.classList.remove("header__nav_active");
  }
});

headerNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerBtn.classList.remove("header__burger_open");
    navMenu.classList.remove("header__nav_active");
  });
});
