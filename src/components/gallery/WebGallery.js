import styles from "../../styles/WebGallery.module.css";
import Image from "next/image";
import galleryItems from "./galleryItems";
function WebGallery() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1>OUR GALLERY</h1>
      </div>
      <div className={styles.body}>
        {galleryItems.map((item) => {
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
    </div>
  );
}

export default WebGallery;
