import React from 'react';
import styles from './home.module.css'; // Importing CSS module for styling
import Aside from './Aside'; // Importing an Aside component for sidebar

import ProductItem from '../../Components/Items/Product/ProductItem'; // Importing ProductItem component to display individual products
import { useValues } from '../../Store/CartContext';

const Home = () => {
  const { data, searchInput, setSearchInput } = useValues();

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value); // Update search input in the context
  };

  return (
    <div className={styles.homeContainer}>
      
      {/* Header section with a search bar */}
      <header className={styles.header}>
        <input 
          type="text" 
          placeholder="Search products..." 
          className={styles.searchBar} 
          value={searchInput} 
          onChange={handleSearchChange} 
        />
      </header>

      {/* Main content container divided into two parts: Sidebar (Aside) and main content */}
      <div className={styles.content}>
        <Aside /> {/* Sidebar component with filters, categories, etc. */}
        
        <main className={styles.mainContent}>
          
          {/* Product data grid will go here */}
          <div className={styles.productGrid}>
            {data.map((product) => (
              // Rendering each product in the data array using the ProductItem component
              <ProductItem key={product.id} product={product} />
            ))}
          </div>

        </main>
      </div>
    </div>
  );
};

export default Home;
