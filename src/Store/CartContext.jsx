// CartContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { useAuth } from './FirebaseAutho'; // Import AuthContext
import { doc, setDoc, getDoc } from "firebase/firestore"; // Firestore functions
import Shopingdata from "../data"; // Your product data

import { toast } from 'react-toastify'; // Import the toast function

const CartContext = createContext();

const useValues = () => {
    return useContext(CartContext);
}

function CustomContext({ children }) {
    const { currentUser } = useAuth(); // Get the current user from Auth context
    const [searchInput, setSearchInput] = useState('');
    const [data] = useState(Shopingdata);
    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [orders, setOrders] = useState([]); // State for orders


    // Add Items to Cart
    const addCart = async (product) => {
        const index = cart.findIndex(data => data.id === product.id);
        let updatedCart;

        if (index === -1) {
            updatedCart = [...cart, { ...product, quantity: 1 }];
            toast.success(`${product.name} added to cart!`);
        } else {
            updatedCart = cart.map((item, i) => 
                i === index ? { ...item, quantity: item.quantity + 1 } : item
            );
        }

        setCart(updatedCart);
        setTotalAmount(totalAmount + parseInt(product.price));
        await saveCartToFirestore(updatedCart); // Save updated cart to Firestore
    };

    // Remove Item From Cart
    const removeCart = async (product) => {
        const updatedCart = cart.filter(data => data.id !== product.id);
        setCart(updatedCart);
        const productPrice = parseInt(product.price) * product.quantity;
        setTotalAmount(totalAmount - productPrice);
        await saveCartToFirestore(updatedCart); // Save updated cart to Firestore
        toast.info(`${product.name} removed from cart!`);
    };

    // Decrease the Item Cart and < 1 delete
    const countDecrement = async (product) => {
        const index = cart.findIndex(data => data.id === product.id);
        let updatedItems = [...cart];
        
        if (updatedItems[index]) {
            const item = updatedItems[index];
            if (item.quantity > 1) {
                updatedItems[index].quantity--;
            } else {
                updatedItems = updatedItems.filter(data => data.id !== product.id);
            }
        }

        setCart(updatedItems);
        setTotalAmount(totalAmount - parseInt(product.price));
        await saveCartToFirestore(updatedItems); // Save updated cart to Firestore
    };

    // Function to save cart to Firestore
    const saveCartToFirestore = async (updatedCart) => {
        if (currentUser) {
            await setDoc(doc(db, "users", currentUser.uid), { cart: updatedCart }, { merge: true });
        }
    };

    //  Handle Purchase
    const handlePurchase = async () => {
        
        if (cart.length === 0) {
            toast.warning("Your cart is empty!");
            return;
        }

        if (currentUser && cart.length > 0) {
            const orderDate = new Date().toISOString().split('T')[0]; // Format date as YYYY-MM-DD
            const orderItems = cart.map(item => ({
                title: item.name,
                price: item.price,
                quantity: item.quantity,
                totalPrice: parseInt(item.price * item.quantity)
            }));

            const newOrder = { date: orderDate, items: orderItems };
            setOrders(prevOrders => [...prevOrders, newOrder]); // Update orders in state

            // Save order to Firestore
            await setDoc(doc(db, "users", currentUser.uid), { orders: [...orders, newOrder] }, { merge: true });

            // Clear cart after purchase
            setCart([]);
            setTotalAmount(0);
            await saveCartToFirestore([]); // Clear cart in Firestore
        }
        toast("Purchase successFull..!");
    };

    // Fetching orders from db
    const loadOrders = async () => {
        if (currentUser) {
            const docRef = doc(db, "users", currentUser.uid);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                const userData = docSnap.data();
                setOrders(userData.orders || []); // Load orders from Firestore
            }
        }
    };
    

    // Load user's cart from Firestore when the component mounts
    useEffect(() => {
        const loadCartFromFirestore = async () => {
            if (currentUser) {
                const docRef = doc(db, "users", currentUser.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    setCart(userData.cart || []); // Load cart from Firestore
                    setTotalAmount(userData.cart.reduce((sum, item) => sum + parseInt(item.price) * item.quantity, 0)); // Calculate total amount
                }
            }
        };

        loadCartFromFirestore();
    }, [currentUser]);

    return (
        <CartContext.Provider value={{
            data,
            totalAmount,
            cart,
            orders,
            addCart,
            removeCart,
            countDecrement,
            handlePurchase,
            loadOrders, 
            searchInput,
            setSearchInput
        }}>
            {children}
        </CartContext.Provider>
    );
}

export { useValues };
export default CustomContext;
