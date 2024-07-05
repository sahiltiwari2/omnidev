import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDCGCrJXsugXaeuhGSpjYJtP5E9rQQqdK4",
    authDomain: "omniedv.firebaseapp.com",
    projectId: "omniedv",
    storageBucket: "omniedv.appspot.com",
    messagingSenderId: "1044536937838",
    appId: "1:1044536937838:web:f1d5290ddee22b6e03c57f",
    measurementId: "G-MF40KY8PTF"
  };
  

 export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
 export const auth = getAuth(app);
 export const database = getDatabase(app);


