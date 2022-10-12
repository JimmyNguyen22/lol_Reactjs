import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { bg2 } from "../../../assets/images";
import HomeSection from "../HomeSection";
import "./champion.scss";
import { ChampionCard } from "./ChampionCard";
import { championsData } from "../../../assets/dummy";

export const Champion = (props) => {
  return (
    <HomeSection
      className={`champion ${props.isActive ? "active" : ""}`}
      contentClassName="overlay "
      bgImage={bg2}
    >
      <div className="container relative">
        <div className="champion-list">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={0}
            grabCursor={true}
            nested={true}
          >
            {championsData.map((item, index) => (
              <SwiperSlide key={index}>
                <ChampionCard item={item} id={index}></ChampionCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </HomeSection>
  );
};
