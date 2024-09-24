import React, { useEffect } from 'react';
import styles from './order.module.css';
import { useValues } from '../../Store/CartContext';

const Order = () => {
  const { orders, loadOrders } = useValues();

  useEffect(() => {
    loadOrders(); // Load orders from Firestore on component mount
  }, [loadOrders]);

  return (
    <div className={styles.orderContainer}>
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found. Start shopping now!</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className={styles.orderCard}>
            <h2>Ordered On: {order.date}</h2>
            <table className={styles.orderTable}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.title}</td>
                    <td>₹ {item.price}</td>
                    <td>{item.quantity}</td>
                    <td>₹ {item.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.totalAmount}>
              Total: ₹ {parseInt(order.items.reduce((acc, item) => acc + item.totalPrice, 0))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Order;
