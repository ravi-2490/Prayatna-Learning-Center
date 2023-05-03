import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import PreSchoolItems from "../../components/services/PreSchoolItems";

//import for web gallery
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "../../styles/WebGallery.module.css";

//import for mini gallery
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import stylesMini from "../../styles/MiniGalley.module.css";

const WebGallery = () => {
  const [page, setPage] = useState(1);
  const handleNextClick = () => {
    page < Math.ceil(PreSchoolItems.length / 6) ? setPage(page + 1) : page;
  };

  const handlePrevClick = () => {
    page > 1 ? setPage(page - 1) : page;
  };
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1>OUR GALLERY</h1>
      </div>
      <div className={styles.body}>
        {PreSchoolItems.slice(page * 6 - 6, page * 6).map((item) => {
          return (
            <Image
              src={item.url}
              alt="Image"
              key={item.id}
              className={styles.image}
            />
          );
        })}
      </div>
      <div className={styles.pageNoContainer}>
        <div className={styles.navigationButton} onClick={handlePrevClick}>
          <AiOutlineArrowLeft />
        </div>
        <div className={styles.pageText}>
          {page} of {Math.ceil(PreSchoolItems.length / 6)}
        </div>
        <div className={styles.navigationButton} onClick={handleNextClick}>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
};

const MiniGallery = () => {
  return (
    <div className={stylesMini.main}>
      <div className={stylesMini.title}>
        <h1>Our Gallery</h1>
      </div>
      <div className={stylesMini.slider}>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className={stylesMini.mySwiper}
        >
          {PreSchoolItems.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Image
                  src={item.url}
                  alt="image"
                  className={stylesMini.image}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Update the state based on the window width
  const updateWindowSize = () => {
    setIsLargeScreen(window.innerWidth >= 768); // Set breakpoint for large screen
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", updateWindowSize);

    // Initial window size check
    updateWindowSize();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);
  return (
    <section id="gallery">
      <div>{isLargeScreen ? <WebGallery /> : <MiniGallery />}</div>
    </section>
  );
};

function PreSchool() {
  return (
    <>
      <section id="preschool">
        <center>
          <div className="container">
            <h2 style={{ color: "green" }}>PreSchool Offering</h2>
            <p align="center">
              `We founded the Pre-School in 2022 with a vision to make learning
              and fun go hand in hand for for toddlers.We are making sure to
              provide a homely environment for kids and also instill a routine
              which is going to help in long way.`
            </p>
          </div>
        </center>
      </section>
      <Gallery />
    </>
  );
}

export default PreSchool;
