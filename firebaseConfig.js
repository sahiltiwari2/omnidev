// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCGCrJXsugXaeuhGSpjYJtP5E9rQQqdK4",
  authDomain: "omniedv.firebaseapp.com",
  databaseURL: "https://omniedv-default-rtdb.firebaseio.com",
  projectId: "omniedv",
  storageBucket: "omniedv.appspot.com",
  messagingSenderId: "1044536937838",
  appId: "1:1044536937838:web:f1d5290ddee22b6e03c57f",
  measurementId: "G-MF40KY8PTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const firestore = getFirestore(app);
const storage = getStorage(app); 

export { auth, database, firestore, storage, ref, app };
