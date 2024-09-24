// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Store/FirebaseAutho';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
    console.log(useAuth())

  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
