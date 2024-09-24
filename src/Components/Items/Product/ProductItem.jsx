import React, { useState } from 'react';
import styles from './productItem.module.css';
import { useValues } from '../../../Store/CartContext';
import { useAuth } from '../../../Store/FirebaseAutho';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ product }) => {

  const {addCart} = useValues();
  const [loading, setLoading] = useState(false); // State for tracking loading
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {

    if(!currentUser){
      navigate('/login'); // Adjust the path based on your routing setup
      return;
    }

    setLoading(true); // Set loading to true when button is clicked
    addCart(product); // Perform the add to cart action

    // Simulate a delay for the "Adding to cart" feedback (can be removed in production)
    setTimeout(() => {
      setLoading(false); // Reset the loading state after a delay
    }, 1000);
  };

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
        <p className={styles.productPrice}> {USDollar.format(product.price)}</p>
      </div>
      <button
        className={styles.addCartBtn}
        onClick={handleAddToCart}
        disabled={loading} // Disable the button while loading
      >
        {loading ? 'Adding to Cart...' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductItem;
