import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/try.module.css";
export async function getStaticProps() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return {
    props: {
      data: data.products,
    },
  };
}

function Index({ data }) {
  const [page, setPage] = useState(1);
  const handleNextClick = () => {
    page < 10 ? setPage(page + 1) : page;
  };
  const handlePreviousClick = () => {
    page > 1 ? setPage(page - 1) : page;
  };
  return (
    <>
      <div className={styles.products}>
        {data.slice(page * 3 - 3, page * 3).map((product) => {
          return (
            <div className={styles.product} key={product.id}>
              <Image
                src={product.images[0]}
                alt={product.title}
                width={100}
                height={100}
                className={styles.image}
              />
              <h3>{product.title}</h3>
            </div>
          );
        })}
      </div>
      <div className={styles.pageNoContainer}>
        <div className={styles.navigationButton} onClick={handlePreviousClick}>
          Prev
        </div>
        <div className={styles.pageText}>
          {page} of {30 / 3}
        </div>
        <div className={styles.navigationButton} onClick={handleNextClick}>
          Next
        </div>
      </div>
    </>
  );
}

export default Index;
