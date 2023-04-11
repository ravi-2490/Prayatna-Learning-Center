import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDQTYsblnY8o-Eck8_-KfKPlFj7zk6MqyQ",
  authDomain: "presonal-blog.firebaseapp.com",
  databaseURL: "https://presonal-blog-default-rtdb.firebaseio.com",
  projectId: "presonal-blog",
  storageBucket: "presonal-blog.appspot.com",
  messagingSenderId: "906535011825",
  appId: "1:906535011825:web:cc94765163bf40eef3b050",
};

export const app = initializeApp(firebaseConfig);
