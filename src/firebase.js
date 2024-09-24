// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAKw4Xxh6sOBTEoYR-oMy8ojD1TD9vuu1A",
  authDomain: "buybusy-8f0cd.firebaseapp.com",
  projectId: "buybusy-8f0cd",
  storageBucket: "buybusy-8f0cd.appspot.com",
  messagingSenderId: "275438612146",
  appId: "1:275438612146:web:bc69057cbe7ba7fdece3ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app); // Initialize authentication
export { db, auth };