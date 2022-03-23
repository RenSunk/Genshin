// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyDgKzy69rjSdpa9LLX_F6wec8d1KMOoUiQ",
  authDomain: "genshin-7808d.firebaseapp.com",
  databaseURL: "https://genshin-7808d-default-rtdb.firebaseio.com",
  projectId: "genshin-7808d",
  storageBucket: "genshin-7808d.appspot.com",
  messagingSenderId: "11193183684",
  appId: "1:11193183684:web:c32dd361f26e092627c891",
  measurementId: "G-SLNV5F1DCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;

