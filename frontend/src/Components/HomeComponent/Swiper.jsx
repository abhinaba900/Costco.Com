import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swipers.css";
import { Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Swipers() {
  const navigate = useNavigate();
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{ padding: "2em", scrollBehavior: "smooth" }}
        onClick={() => navigate("/products")}
      >
        <SwiperSlide style={{ width: "90%" }}>
          <Image
            objectFit={"contain"}
            src={
              "https://mobilecontent.costco.com/live/resource/img/24w03282/d-24w03282-hero-mvm-jan-michelin.jpg"
            }
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            objectFit={"contain"}
            src={
              "https://mobilecontent.costco.com/staging/resource/img/24w05065/d_24w05065_hero_superbowl_savings_v3.jpg"
            }
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            objectFit={"contain"}
            src={
              "https://mobilecontent.costco.com/staging/resource/img/cat-hero/d_24w06026_hero_mvm_sectional_v3.jpg"
            }
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            objectFit={"contain"}
            src={
              "https://mobilecontent.costco.com/staging/resource/img/cat-hero/d_24w06026_hero_mvm_mattress_v2.jpg"
            }
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            objectFit={"contain"}
            src={
              "https://mobilecontent.costco.com/live/resource/img/24w05067/d_24w05067_hero_feb_mailer.jpg"
            }
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            objectFit={"contain"}
            src={
              "https://mobilecontent.costco.com/live/resource/img/24w05155/d_24w05155_hero_apparel_arrive_in_style_v2.jpg"
            }
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            objectFit={"contain"}
            src={
              "https://mobilecontent.costco.com/staging/resource/img/24w05156/d_24w05156_hero_feel_good_apparel.jpg"
            }
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            objectFit={"contain"}
            src={
              "https://mobilecontent.costco.com/live/resource/img/24w05163/d-24w05163-hero-galaxy-v.jpg"
            }
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            objectFit={"contain"}
            src={
              "https://mobilecontent.costco.com/live/resource/img/All_Inclusive_Final/20240129_ALL_Inclusive_Homepage_HeroUS_ComHero_D.jpg"
            }
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            objectFit={"contain"}
            src={
              "https://mobilecontent.costco.com/live/resource/img/24w05105/d_24w05105_spend_and_save_cat_hero_v2.jpg"
            }
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            objectFit={"contain"}
            src={
              "https://mobilecontent.costco.com/live/resource/img/24w06025/d_24w02189_hero_dec_mvm_tires_v2.jpg"
            }
            alt="Slide 1"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
