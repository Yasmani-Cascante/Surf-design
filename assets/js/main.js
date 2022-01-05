function navToggle() {
  var btn = document.getElementById("menuBtn");
  var nav = document.getElementById("menu");

  btn.classList.toggle("open");
  nav.classList.toggle("flex-column");
  nav.classList.toggle("hidden");
}

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    600: {
        slidesPerView: 1,
        spaceBetweenSlides: 50
    },
    750: {
      slidesPerView: 2,
      spaceBetweenSlides: 50
  },
    1020: {
        slidesPerView: 3,
        spaceBetweenSlides: 50
    }
}
});
