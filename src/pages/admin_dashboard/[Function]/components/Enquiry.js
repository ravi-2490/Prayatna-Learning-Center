import { app } from "../../../../../firebase/initFirebase";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import Card from "../Card";
import styles from "../../../../styles/Enquiry.module.css";
import { useEffect, useState } from "react";
const db = getFirestore(app);

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
