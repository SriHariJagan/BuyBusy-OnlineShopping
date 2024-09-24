import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/Header/NavBar';
import CustomContext from './Store/CartContext';
import AuthProvider from './Store/FirebaseAutho';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <CustomContext>
          <NavBar />
          <App />
        </CustomContext>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
