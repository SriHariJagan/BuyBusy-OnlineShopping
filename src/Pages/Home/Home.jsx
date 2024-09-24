import React from 'react';
import styles from './home.module.css'; // Importing CSS module for styling
import Aside from './Aside'; // Importing an Aside component for sidebar
import ProductItem from '../../Components/Items/Product/ProductItem'; // Importing ProductItem component to display individual products
import { useValues } from '../../Store/CartContext';

const Home = () => {
  const { data, searchInput, setSearchInput } = useValues();

  // Function to handle search input changes
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value); // Update search input in the context
  };

  // Filter products based on search input
  const filteredData = data.filter((product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase()) // Check if product name includes the search input
  );

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
          
          {/* Product data grid */}
          <div className={styles.productGrid}>
            {filteredData.length > 0 ? (
              filteredData.map((product) => (
                // Rendering each product in the filtered data array using the ProductItem component
                <ProductItem key={product.id} product={product} />
              ))
            ) : (
              <p>No products found.</p> // Display a message if no products match the search input
            )}
          </div>

        </main>
      </div>
    </div>
  );
};

export default Home;
