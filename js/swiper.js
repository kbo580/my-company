const mySwiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 100,
  initialSlide: 2,
  loop: true,
  centeredSlides: true,
  effect: "card",
  autoplay: {
          delay: 30000,
      },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
