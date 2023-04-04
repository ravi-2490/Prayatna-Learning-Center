import styles from "../../styles/About.module.css";
import Image from "next/image";
import image from "../../../public/images/about/1.webp";
function About() {
  return (
    <section id="aboutus">
      <div className={styles.aboutus}>
        <div className={styles.imageContainer}>
          <Image src={image} alt="Image" className={styles.image} />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.title}>
            <h1>ABOUT US</h1>
          </div>
          <p className={styles.content}>
            We are committed to take education to every single door, making it a
            superb blend of knowledge and job specific. Our mission is to create
            ethical and intellectual personnel through qualitative education.
            Today, Prayatna Learning Centre is located at Ramamurthy Nagar,
            bangalore, Karnataka. And, we are looking forward to spread our
            efficiency at every nook and corner of India. We are the player with
            diverse courses, teaching methodology, efficient faculty team and
            effective management staff. Choose to contact or reach us for an
            assured advanced career.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
