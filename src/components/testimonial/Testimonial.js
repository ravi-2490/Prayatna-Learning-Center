import React from "react";
import TestimonialItems from "./TestimonialItems";
import Image from "next/image";
import styles from "../../styles/Testimonial.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import { Pagination, A11y, Autoplay } from "swiper";

function Testimonial() {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  };
  return (
    <div className={`${styles["slide-container"]} swiper`}>
      <h1 className={`${styles["title"]}`}>CLIENTS TESTIMONIAL</h1>
      <div className={`${styles["slide-content"]}`}>
        <div className={`card-wrapper swiper-wrapper`}>
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            loop={true}
            noSwiping={true}
            noSwipingClass={"swiper-no-swiping"}
            breakpoints={breakpoints}
          >
            {TestimonialItems.map((item) => (
              <SwiperSlide key={item.image}>
                <div className={`${styles["card"]} swiper-slide`}>
                  <div className={`${styles["image-content"]}`}>
                    <span className={`${styles["overlay"]}`}></span>

                    <div className={`${styles["card-image"]}`}>
                      <Image
                        src={item.image}
                        alt=""
                        className={`${styles["card-img"]}`}
                      />
                    </div>
                  </div>

                  <div className={`${styles["card-content"]}`}>
                    <h2 className={`${styles["name"]}`}>{item.name}</h2>
                    <p className={`${styles["description"]}`}>{item.content}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
