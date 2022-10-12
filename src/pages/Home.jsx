import React from "react";
import SwiperCore, { EffectFade, Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Welcome } from "../components/HomeSection";

SwiperCore.use([Mousewheel, Pagination, EffectFade]);

const swiperOptions = {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: "fade",
  speed: 1000,
};

const Home = () => {
  return (
    <>
      <Swiper {...swiperOptions}>
        <SwiperSlide>
          {({ isActive }) => <Welcome isActive={isActive}></Welcome>}
        </SwiperSlide>
        <SwiperSlide>slide 3</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;
