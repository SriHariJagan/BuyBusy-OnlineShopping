// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBXVjuJgCu9XAwp_ZZQyiHpOvBg6M7_iZM",
  authDomain: "buybusy-4dc32.firebaseapp.com",
  projectId: "buybusy-4dc32",
  storageBucket: "buybusy-4dc32.firebasestorage.app",
  messagingSenderId: "775577330296",
  appId: "1:775577330296:web:ff44b9eba7eaf4a5cd838d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };