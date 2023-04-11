// import { useRouter } from "next/router";
// import styles from "../../../../styles/Enquiry.module.css";
// import { app } from "../../../../../firebase/initFirebase";
// import { getFirestore, getDoc, doc, collection } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { BsFillTrashFill } from "react-icons/bs";

// import image from "../../../../../public/images/admin/user.webp";
// const db = getFirestore(app);

// const Index = () => {
//   const router = useRouter();
//   const { Single_enquiry: enquiryId } = router.query; // Destructure enquiryId from query object
//   const [userData, setUserData] = useState(null); // Set initial state to null to handle data retrieval

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const docRef = doc(db, "enquiries", enquiryId);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           setUserData(docSnap.data());
//         } else {
//           console.log("Document does not exist");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     if (enquiryId) {
//       // Check if enquiryId exists before fetching data
//       getData();
//     }
//   }, [enquiryId]); // Include enquiryId as a dependency to re-run effect when it changes

//   // Check if userData is null or undefined before accessing its properties
//   const firstName = userData ? userData.firstName : "";
//   const lastName = userData ? userData.lastName : "";
//   const email = userData ? userData.email : "";
//   const message = userData ? userData.message : "";
//   const mobile = userData ? userData.mobile : "";

//   const handleDelete = async () => {
//     await db
//       .collection("enquiries")
//       .doc(enquiryId)
//       .delete()
//       .then(() => {
//         console.log("Document successfully deleted!");
//       })
//       .catch((error) => {
//         console.error("Error deleting document: ", error);
//       });
//   };

//   return (
//     <div className={styles.parent}>
//       <div className={styles.mainWrapper}>
//         {/* this is the header */}
//         <div className={styles.header}>
//           <div className={styles.imageWrapper}>
//             <Image src={image} alt="image" className={styles.image} />
//           </div>
//           <div className={styles.nameWrapper}>
//             <h1>{`${firstName} ${lastName}`}</h1>
//             <h5>{email}</h5>
//             <h5>{mobile}</h5>
//           </div>
//           <div className={styles.trash}>
//             <BsFillTrashFill className={styles.icon} onClick={handleDelete} />
//           </div>
//         </div>
//         {/* This is the body */}
//         <div className={styles.body}>
//           <h5>{message}</h5>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;

import { useRouter } from "next/router";
import styles from "../../../../styles/Enquiry.module.css";
import { app } from "../../../../../firebase/initFirebase";
import {
  getFirestore,
  getDoc,
  doc,
  collection,
  deleteDoc,
} from "firebase/firestore"; // import deleteDoc function for deleting documents
import { useEffect, useState } from "react";
import Image from "next/image";
import { BsFillTrashFill } from "react-icons/bs";

import image from "../../../../../public/images/admin/user.webp";
const db = getFirestore(app);

const Index = () => {
  const router = useRouter();
  const { Single_enquiry: enquiryId } = router.query; // Destructure enquiryId from query object
  const [userData, setUserData] = useState(null); // Set initial state to null to handle data retrieval

  useEffect(() => {
    const getData = async () => {
      try {
        const docRef = doc(db, "enquiries", enquiryId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("Document does not exist");
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (enquiryId) {
      // Check if enquiryId exists before fetching data
      getData();
    }
  }, [enquiryId]); // Include enquiryId as a dependency to re-run effect when it changes

  // Check if userData is null or undefined before accessing its properties
  const firstName = userData ? userData.firstName : "";
  const lastName = userData ? userData.lastName : "";
  const email = userData ? userData.email : "";
  const message = userData ? userData.message : "";
  const mobile = userData ? userData.mobile : "";

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "enquiries", enquiryId));
      console.log("Document successfully deleted!");
      router.push("/admin_dashboard/1");
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div className={styles.parent}>
      <div className={styles.mainWrapper}>
        {/* this is the header */}
        <div className={styles.header}>
          <div className={styles.imageWrapper}>
            <Image src={image} alt="image" className={styles.image} />
          </div>
          <div className={styles.nameWrapper}>
            <h1>{`${firstName} ${lastName}`}</h1>
            <h5>{email}</h5>
            <h5>{mobile}</h5>
          </div>
          <div className={styles.trash}>
            <BsFillTrashFill className={styles.icon} onClick={handleDelete} />
          </div>
        </div>
        {/* This is the body */}
        <div className={styles.body}>
          <h5>{message}</h5>
        </div>
      </div>
    </div>
  );
};

export default Index;
