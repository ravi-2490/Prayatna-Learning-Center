import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import styles from "../../styles/MiniGalley.module.css";

import GalleryItems from "./galleryItems";

import Image from "next/image";

function MiniGallery() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1>Our Gallery</h1>
      </div>
      <div className={styles.slider}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.mySwiper}
        >
          {GalleryItems.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Image src={item.url} alt="image" className={styles.image} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
export default MiniGallery;
