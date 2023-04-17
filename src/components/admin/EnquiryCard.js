import { useRouter } from "next/router";
import Image from "next/image";
import userImage from "../../../public/images/admin/user.webp";
import styles from "../../styles/Enquiry.module.css";
const Card = (props) => {
  const { id, firstName, lastName, email, message, mobile } = props.details;
  const router = useRouter();

  return (
    <div
      className={styles.cardWrapper}
      onClick={() => router.push(`/admin_dashboard/1/${id}`)}
    >
      <div>
        <Image src={userImage} alt="Image" className={styles.image} />
      </div>
      <div className={styles.name}>
        <h3>{`${firstName} ${lastName}`}</h3>
      </div>
    </div>
  );
};

export default Card;
