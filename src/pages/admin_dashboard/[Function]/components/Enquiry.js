import { getDocs, collection } from "firebase/firestore";
import userImage from "../../../../../public/images/admin/user.webp";
import styles from "../../../../styles/Enquiry.module.css";
import { useEffect, useState } from "react";

import { db } from "../../../../../firebase/initFirebase";

import { useRouter } from "next/router";
import Image from "next/image";

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

const Enquiry = () => {
  const [enquiryData, setEnquiryData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collection(db, "enquiries"));
      const temp = [];
      data.forEach((val) => {
        temp.push({ id: val.id, ...val.data() });
      });
      setEnquiryData(temp);
    };
    getData();
  }, []);

  return (
    <div className={styles.wrapper}>
      {enquiryData.map((item) => {
        return <Card key={item.id} details={item} />;
      })}
    </div>
  );
};

export default Enquiry;
