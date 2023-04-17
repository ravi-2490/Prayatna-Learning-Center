import styles from "../../styles/Admin_dashboard.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Card = (props) => {
  const router = useRouter();
  const { id, name, image } = props.details;
  const handleClick = () => {
    router.push(`/admin_dashboard/${id}`);
  };
  return (
    <div className={styles.cardWrapper} onClick={handleClick}>
      <Image src={image} alt="Enquiry Image" className={styles.image} />
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
