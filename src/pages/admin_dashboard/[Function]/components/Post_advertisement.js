import React, { useState } from "react";
import styles from "../../../../styles/Post_advertisement.module.css";
import Loading from "@/components/loading/Loading";

import { useDispatch } from "react-redux";
import { addAdvertisement } from "../../../../../redux/slices/advertisementSlice";

function Post_advertisement() {
  const dispatch = useDispatch();

  const [adsData, setAdsData] = useState({
    title: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAdsData({ ...adsData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(adsData);
    setLoading(true);
    dispatch(addAdvertisement(adsData));
    setLoading(false);
    setAdsData({
      title: "",
      content: "",
    });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.label}>Post Advertisement</div>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.title}>
                Title
                <input
                  name="title"
                  type="text"
                  value={adsData.title}
                  placeholder="Enter title"
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.content}>
                Content
                <textarea
                  name="content"
                  type="text"
                  value={adsData.content}
                  placeholder="Enter content"
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
              <input
                type="submit"
                value="Post Advertisement"
                className={styles.submit}
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Post_advertisement;
