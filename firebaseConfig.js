// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7JbfTHm2qFvnpCe8PDHE42vcrujYbysU",
  authDomain: "ciie-summer-training-program.firebaseapp.com",
  projectId: "ciie-summer-training-program",
  storageBucket: "ciie-summer-training-program.appspot.com",
  messagingSenderId: "230709441202",
  appId: "1:230709441202:web:84017542175ed5ffbe4fab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, database, firestore, storage, ref, app };
