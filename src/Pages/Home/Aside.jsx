import React from 'react';
import styles from './home.module.css';
import { useValues } from '../../Store/CartContext';

const Aside = () => {
    const { priceRange, setPriceRange, selectedCategories, setSelectedCategories, applyFilters } = useValues(); // Add applyFilters from context

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            setSelectedCategories([...selectedCategories, category]);
        } else {
            setSelectedCategories(selectedCategories.filter(cat => cat !== category));
        }
        applyFilters(); // Call to apply filters
    };

    const handlePriceChange = (e) => {
        setPriceRange(parseInt(e.target.value));
        applyFilters(); // Call to apply filters
    };

    return (
        <aside className={styles.sidebar}>
            <h3>Filters</h3>
            <div className={styles.filterSection}>
                <h4>Price Range</h4>
                <span>Price {priceRange}</span>
                <input
                    type="range"
                    min="599"
                    max="1599"
                    value={priceRange}
                    className={styles.priceRange}
                    onChange={handlePriceChange} // Call the handler for price change
                />
            </div>
            <div className={styles.filterCategorie}>
                <h4>Categories</h4>
                <div>
                    <input
                        type="checkbox"
                        value="men"
                        onChange={handleCategoryChange}
                    />
                    <label htmlFor="mens">Men's</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        value="women"
                        onChange={handleCategoryChange}
                    />
                    <label htmlFor="womens">Women's</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        value="jewelry"
                        onChange={handleCategoryChange}
                    />
                    <label htmlFor="jewelery">Jewelry</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        value="electronics"
                        onChange={handleCategoryChange}
                    />
                    <label htmlFor="electronics">Electronics</label>
                </div>
            </div>
        </aside>
    );
};

export default Aside;
