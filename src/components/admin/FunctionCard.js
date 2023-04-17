import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/Admin_dashboard.module.css";
const Card = (props) => {
  const router = useRouter();
  const { id, name, imageUrl } = props.details;
  const handleClick = () => {
    router.push(`/admin_dashboard/${id}`);
  };
  return (
    <div className={styles.cardWrapper} onClick={handleClick}>
      <Image src={imageUrl} alt="Enquiry Image" className={styles.image} />
      <h3>{name}</h3>
    </div>
  );
};
export default Card;
