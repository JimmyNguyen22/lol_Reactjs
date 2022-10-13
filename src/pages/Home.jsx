import React from "react";
import SwiperCore, { EffectFade, Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { championsData } from "../assets/dummy";
import {
  Champion,
  Welcome,
  ChampionDetail,
  Trailer,
  Credit,
} from "../components/HomeSection";

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
        <SwiperSlide>
          {({ isActive }) => <Champion isActive={isActive}></Champion>}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Trailer isActive={isActive}></Trailer>}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Credit isActive={isActive}></Credit>}
        </SwiperSlide>
      </Swiper>
      {championsData.map((item, index) => (
        <ChampionDetail key={index} item={item} id={index}></ChampionDetail>
      ))}
      <div className="scroll">
        <span>Scroll to see effect</span>
      </div>
    </>
  );
};

export default Home;
