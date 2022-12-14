
//worksのスライダー
const mySwiper = new Swiper('.works-swiper', {
  loop: true,
  effect: "card",
  speed: 1000,
  autoplay: {
    delay: 3000,
  },

  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    // 552px以上の場合
    552: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // 768px以上の場合
    768: {
      slidesPerView: 3,
      spaceBetween: 80,
      centeredSlides: true,
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


var swiper = new Swiper('.banner-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    // 576px以上の場合
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // 768px以上の場合
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});
