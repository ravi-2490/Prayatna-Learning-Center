import React from "react";
import loadingAnimation from "../../../public/animation/loading.json";
import Lottie from "lottie-react";
import styles from "../../styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <Lottie animationData={loadingAnimation} className={styles.animation} />
    </div>
  );
};

export default Loading;
