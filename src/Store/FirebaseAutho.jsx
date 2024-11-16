// AuthProvider.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from '../firebase'; 
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore functions

import { toast } from "react-toastify";

const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to handle errors

  const [loginFlag, setLoginFlag] = useState(false);

  const signup = async (email, password, navigate) => {
    try {
      // Validate inputs
      if (!email || !password) {
        throw new Error("Email and Password are required");
      }
  
      // Create user account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("userCredentials-------------1", userCredential);

      // Initialize user document in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email: userCredential.user.email,
        cart: [],
        orders: [],
      });

      console.log("userCredentials--------------2", userCredential);
  
      toast.success("Account Created Successfully!");
      return userCredential.user;
    } catch (error) {
      console.log("Error signing up:", error);
      if (error.code === "auth/email-already-in-use") {
        toast.info("Email already in use. Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error("An error occurred. Please try again.");
      }
      throw error;
    }
  };
  

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      toast.success("login Success..!")
      setLoginFlag(true)
      return userCredential.user;
    } catch (error) {
      setError(error.message); // Set error message state
      console.error("Error logging in:", error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
        await signOut(auth);
        toast.info("Logout Success"); // Show logout success message
        setLoginFlag(false)
    } catch (error) {
        console.error("Error logging out:", error.message);
        toast.error("Logout failed! Please try again.");
    }
};

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    loginFlag,
    error, // Provide error state in context
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { useAuth };
export default AuthProvider;
