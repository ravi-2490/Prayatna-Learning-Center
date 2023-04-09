import playstore from "../../../public/images/app/1.png";
import appstore from "../../../public/images/app/2.webp";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Applogo.module.css";
import { toast } from "react-toastify";

const Applogo = () => {
  const handleClick = () => {
    toast.success("App will be available soon.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className={styles.applogo}>
      <Image
        src={playstore}
        alt="Playstore Image"
        className={styles.playstore}
        onClick={handleClick}
      />
      <Image
        src={appstore}
        alt="Appstore Image"
        className={styles.appstore}
        onClick={handleClick}
      />
    </div>
  );
};

export default Applogo;
