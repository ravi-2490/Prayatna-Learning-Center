import styles from "../../styles/Admin_dashboard.module.css";
import Card from "./Card";

import enquiryImage from "../../../public/images/admin/enquiry.png";
import postImage from "../../../public/images/admin/post.png";
import usersImage from "../../../public/images/admin/users.png";

const Index = () => {
  const FunctionItems = [
    {
      id: 1,
      name: "Incoming Enquiry",
      image: enquiryImage,
    },
    {
      id: 2,
      name: "Post notification",
      image: postImage,
    },
    {
      id: 3,
      name: "See the Users",
      image: usersImage,
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
