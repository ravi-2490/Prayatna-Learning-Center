import styles from "../../styles/Admin_dashboard.module.css";
// import Card from "./Card";
import Image from "next/image";
import { useRouter } from "next/router";
import enquiryImage from "../../../public/images/admin/enquiry.png";
import postImage from "../../../public/images/admin/post.png";
import usersImage from "../../../public/images/admin/users.png";

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

const Index = () => {
  const FunctionItems = [
    {
      id: 1,
      name: "Incoming Enquiry",
      imageUrl: enquiryImage,
    },
    {
      id: 2,
      name: "Post notification",
      imageUrl: postImage,
    },
    {
      id: 3,
      name: "See the Users",
      imageUrl: usersImage,
    },
  ];
  return (
    <div className={styles.wrapper}>
      {FunctionItems.map((item) => {
        return <Card key={item.id} details={item} />;
      })}
    </div>
  );
};

export default Index;
