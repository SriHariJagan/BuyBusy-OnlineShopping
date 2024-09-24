import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Store/FirebaseAutho'; // Ensure the path is correct
import styles from './signup.module.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }else{
      try {
        await signup(email, password, navigate);
        navigate('/login'); // Redirect after successful signup
      } catch (error) {
        console.error("Signup failed:", error.message);
      }
    }
    
    setEmail("");
    setPassword('');
    setConfirmPassword('')
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Sign Up</h2>
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
          <input 
            className={styles.input} 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required 
          />
          <button className={styles.button} type="submit">Sign Up</button>
        </form>
        <p className={styles.text}>
          Already have an account? <Link to="/login" className={styles.loginLink}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
