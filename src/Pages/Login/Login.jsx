import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Store/FirebaseAutho'; // Ensure the path is correct
import styles from './login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/'); // Redirect after successful login
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input 
            className={styles.input} 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            className={styles.input} 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button className={styles.button} type="submit">Login</button>
        </form>
        <p className={styles.text}>
          Don't have an account? <Link to="/signup" className={styles.signupLink}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
