import React, { useEffect } from "react";
import styles from "../../styles/Advertisment.module.css";
import { BsDot } from "react-icons/bs";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { getAdvertisement } from "../../../redux/slices/advertisementSlice";

function Advertisment() {
  const router = useRouter();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.advertisement.data);
  const advertismentList = [
    {
      id: 1,
      title: "Summer Camp",
      content:
        "Worried about your child in summer holidays!!! send them to us we will help them to be consistent in academics without missing the summer fun.",
    },
    {
      id: 2,
      title: "Hiring Mathematics Faculty",
      content:
        "Prayatna Learning Center invites applications for a Mathematics faculty position at the Assistant Faculty Level. Please fill contact form for more details.",
    },
  ];

  useEffect(() => {
    dispatch(getAdvertisement());
  }, []);

  return (
    <>
      {data === null ? (
        <div></div>
      ) : (
        <div className={styles.container}>
          <div className={styles.updateLabel}>New Update</div>
          <div
            className={styles.animationContainer}
            onClick={() => router.push("/contactus")}
          >
            {data.map((item) => {
              return (
                <div className={styles.contentContainer} key={item.id}>
                  <span className={styles.content}>
                    <BsDot className={styles.dot} />
                    {item.title}
                    <span>{" : "}</span>
                    {item.content}
                  </span>
                </div>
              );
            })}
          </div>
          <div
            className={styles.actionButton}
            onClick={() => router.push("/contactus")}
          >
            Contact us
          </div>
        </div>
      )}
    </>
  );
}

export default Advertisment;
