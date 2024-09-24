import React, { useEffect, useState } from 'react';
import styles from './error.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev === 1) {
                    navigate('/');
                    clearInterval(timer);
                    return 0; // To avoid going below zero
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [navigate]);

    return (
        <div className={styles.container}>
            <div className={styles.errorWrapper}>
                <h1 className={styles.errorCode}>404</h1>
                <p className={styles.errorMessage}>Oops! The page you're looking for doesn't exist.</p>
                <p className={styles.redirectMessage}>
                    Redirecting back to home in <strong>{countdown} seconds</strong>.
                </p>
                <p className={styles.pathMessage}>
                    Path not Found: <strong>{location.pathname}</strong>
                </p>
                <Link to="/" className={styles.homeLink}>Go Back to Home</Link>
            </div>
        </div>
    );
};

export default Error;
