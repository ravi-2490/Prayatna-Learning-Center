import styles from "../../styles/WebGallery.module.css";
import Image from "next/image";
import galleryItems from "./galleryItems";
import React, { useState } from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

function WebGallery() {
  const [page, setPage] = useState(1);
  const handleNextClick = () => {
    page < Math.ceil(galleryItems.length / 6) ? setPage(page + 1) : page;
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
        {galleryItems.slice(page * 6 - 6, page * 6).map((item) => {
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
      {/* <div className={styles.pageNoContainer}>
        {page === 1 ? (
          ""
        ) : (
          <div className={styles.navigationButton} onClick={handlePrevClick}>
            <AiOutlineArrowLeft />
          </div>
        )}
        <div className={styles.pageText}>
          {page} of {Math.ceil(galleryItems.length / 6)}
        </div>
        {page === Math.ceil(galleryItems.length / 6) ? (
          ""
        ) : (
          <div className={styles.navigationButton} onClick={handleNextClick}>
            <AiOutlineArrowRight />
          </div>
        )}
      </div> */}

      <div className={styles.pageNoContainer}>
        <div className={styles.navigationButton} onClick={handlePrevClick}>
          <AiOutlineArrowLeft />
        </div>
        <div className={styles.pageText}>
          {page} of {Math.ceil(galleryItems.length / 6)}
        </div>
        <div className={styles.navigationButton} onClick={handleNextClick}>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
}

export default WebGallery;
