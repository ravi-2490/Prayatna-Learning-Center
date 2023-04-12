import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDQTYsblnY8o-Eck8_-KfKPlFj7zk6MqyQ",
  authDomain: "presonal-blog.firebaseapp.com",
  databaseURL: "https://presonal-blog-default-rtdb.firebaseio.com",
  projectId: "presonal-blog",
  storageBucket: "presonal-blog.appspot.com",
  messagingSenderId: "906535011825",
  appId: "1:906535011825:web:cc94765163bf40eef3b050",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
