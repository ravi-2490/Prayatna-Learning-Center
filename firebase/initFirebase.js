import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAv9i8ygkh9mgKfBCDXsClOWNdtqaXbh5w",
  authDomain: "prayatnalearning-ac943.firebaseapp.com",
  projectId: "prayatnalearning-ac943",
  storageBucket: "prayatnalearning-ac943.appspot.com",
  messagingSenderId: "198306796229",
  appId: "1:198306796229:web:0ed12706425f8daf5856ac"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
