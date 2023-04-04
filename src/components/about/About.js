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
            Prayatna Learning Center is located in IT Hub, Bengaluru. It is one
            of the most loved centre for learning. We cater coaching and
            tuitions for classes starting from Nursery to 12th Standard. It was
            founded by Engineers and lecturers in 2017 with a vision to make
            learning easy and fun. Our passion is to make kids understand
            complex concepts in simplest ways. We provide wide range of services
            like KCET, NATA coaching, Improvement classes for specific subjects
            , online and Offline customised classes and so on. We are committed
            to take education to every single door, making it a superb blend of
            knowledge and job specific. Our mission is to create ethical and
            intellectual personnel through qualitative education. We are the
            player with diverse courses, teaching methodology, efficient faculty
            team and effective management staff. Choose to contact us for smooth
            learning experience
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
