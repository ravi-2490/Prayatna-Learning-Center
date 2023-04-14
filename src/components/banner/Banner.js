import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, A11y, Autoplay } from "swiper";
import "../../../node_modules/swiper/swiper-bundle.min.css";

import styles from "../../styles/Banner.module.css";
import BannerItems from "./BannerItems";

const Banner = () => {
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      loop={true}
      noSwiping={true}
      noSwipingClass={"swiper-no-swiping"}
      className={styles.bannerContainer}
    >
      {BannerItems.map((item) => {
        return (
          <SwiperSlide key={item.id} className={styles.swiperSlide}>
            <Image
              src={item.url}
              alt={item.name}
              className={styles.bannerImage}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Banner;
