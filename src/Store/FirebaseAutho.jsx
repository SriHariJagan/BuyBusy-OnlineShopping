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

  const signup = async (email, password, navigate) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Create a user document in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email: userCredential.user.email,
        cart: [], // Initialize with an empty cart
        orders: [] // Initialize with an empty orders array
      });

      toast.success("Account Created...!")
      return userCredential.user;
      
    } catch (error) {
      setError(error.message); // Set error message state
      console.error("Error signing up:", error.message);

      if (error.code === 'auth/email-already-in-use') {
        toast.info("Email already in use. Redirecting to login...");
          setTimeout(() => {
              navigate('/login'); // Redirect to the login page after a short delay
          }, 2000);
      }else{
        toast.error(error.message)
      }

      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      toast.success("login Success..!")
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
