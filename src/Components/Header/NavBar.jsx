import React from 'react';
import styles from './navBar.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../Store/FirebaseAutho'; // Adjust the import path as necessary

import home from '../../Asserts/Images/home.png';
import cart from '../../Asserts/Images/cart.png';
import order from '../../Asserts/Images/order.png';
import enter from '../../Asserts/Images/enter.png';
import exit from '../../Asserts/Images/exit.png';

const NavBar = () => {
  const { currentUser, logout } = useAuth(); // Get the current user and logout function from the Auth context

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>ShopLogo</div>
        <div className={styles.navLinks}>
          
          <NavLink to="/" className={({ isActive }) => (isActive ? `${styles.isActive} ${styles.link}` : `${styles.link}`)}>
              <span><img src={home} alt="home" /></span> Home
          </NavLink>

          { !currentUser ? (
            <>
              <NavLink to="/login" className={({ isActive }) => (isActive ? `${styles.isActive} ${styles.link}` : `${styles.link}`)}>
                <span><img src={enter} alt="enter" /></span> Login
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/cart" className={({ isActive }) => (isActive ? `${styles.isActive} ${styles.link}` : `${styles.link}`)}>
                <span><img src={cart} alt="cart" /></span> Cart
              </NavLink>
              <NavLink to="/orders" className={({ isActive }) => (isActive ? `${styles.isActive} ${styles.link}` : `${styles.link}`)}>
                <span><img src={order} alt="order" /></span> My Orders
              </NavLink>
              <button className={styles.link} onClick={logout}>
                <span><img src={exit} alt="sign out" /></span> Sign Out
              </button>
            </>
          )}
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default NavBar;
