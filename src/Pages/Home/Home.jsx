import React, { useEffect } from 'react';
import styles from './home.module.css';
import Aside from './Aside';
import ProductItem from '../../Components/Items/Product/ProductItem';
import { useValues } from '../../Store/CartContext';

const Home = () => {
  const { data, searchInput, setSearchInput, applyFilters } = useValues();

  useEffect(() => {
    applyFilters(); // Call the applyFilters function on mount or when dependencies change
  }, [applyFilters]); // Adding applyFilters as a dependency

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredData = data.filter((product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <input 
          type="text" 
          placeholder="Search products..." 
          className={styles.searchBar} 
          value={searchInput} 
          onChange={handleSearchChange} 
        />
      </header>

      <div className={styles.content}>
        <Aside />
        
        <main className={styles.mainContent}>
          <div className={styles.productGrid}>
            {filteredData.length > 0 ? (
              filteredData.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
