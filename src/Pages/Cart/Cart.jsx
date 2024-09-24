import React from 'react';
import styles from './cart.module.css';
import CartItem from '../../Components/Items/Cart/CartItem';
import { useValues } from '../../Store/CartContext';

const Cart = () => {

  const {cart, totalAmount, handlePurchase} = useValues();

  return (
    <div className={styles.cartContainer}>
      <aside className={styles.sidebar}>
        <h3>Total Price: &nbsp; ₹ {totalAmount}/-</h3>
        <button className={styles.purchaseButton} onClick={handlePurchase}>Purchase</button>
      </aside>
      <main className={styles.main}>
        {totalAmount === 0 ? <span className={styles.cartEmpty}> Cart is Empty !</span>  : 
          (<div className={styles.productGrid}>
            {cart.map(product => <CartItem key={product.id} product={product}/>)}
          </div>)}
      </main>
    </div>
  );
};

export default Cart;
