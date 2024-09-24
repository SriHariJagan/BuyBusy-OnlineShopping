import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// For Notification
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Home from './Pages/Home/Home';
import Loading from './Components/Spinner/Spinner';
import Error from './Pages/Error/Error'; // Corrected typo in the import
import ProtectedRoute from './Components/ProtectedRoute'; // Adjust the import path as necessary

const Cart = lazy(() => import('./Pages/Cart/Cart'));
const Order = lazy(() => import('./Pages/Orders/Order'));
const Login = lazy(() => import('./Pages/Login/Login'));
const Signup = lazy(() => import('./Pages/Signup/Signup'));


const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          
          {/* Protected Routes */}
          <Route 
            path='/cart' 
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            } 
          />
          <Route 
            path='/orders' 
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            } 
          />

          <Route path='*' element={<Error />} />
        </Routes>
      </Suspense>

      <ToastContainer />
    </>
  );
};

export default App;
