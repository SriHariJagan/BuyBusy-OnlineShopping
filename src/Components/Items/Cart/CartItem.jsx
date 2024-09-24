import React from 'react';
import styles from './cartItem.module.css';

import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { useValues } from '../../../Store/CartContext';

const CartItem = ({ product }) => {

  const {removeCart, addCart, countDecrement} = useValues();

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  });
  
  return (
    <div className={styles.productItem}>
      <div className={styles.productImage}>
        <img src={product.img} alt={product.name}  width={50}/>
      </div>
      <div className={styles.productDetails}>
        <h2 className={styles.productName}>{product.name}</h2>
        <p className={styles.productPrice}> 
            {USDollar.format(product.price)}

            <span className={styles.productCount}>
                <button onClick={() => countDecrement(product)}><TiMinus /></button> 
                <span>{product.quantity}</span> 
                <button onClick={() => addCart(product)}><TiPlus /></button>
            </span>
        </p>
      </div>
      <button className={styles.addCartBtn} onClick={() => removeCart(product)}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;
