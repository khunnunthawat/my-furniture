import { SwiperOptions } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";

export const roomInspirationOption: SwiperOptions = {
  pagination: {
    clickable: true,
  },
  modules: [Navigation, Pagination],
  spaceBetween: 24,
  slidesPerView: "auto",
  loop: true,
  allowTouchMove: true,
  scrollbar: true,
  freeMode: true,
  resistanceRatio: 0,
  breakpoints: {
    360: {
      centeredSlides: true,
    },
    768: {
      centeredSlides: false,
    },
  },
};
