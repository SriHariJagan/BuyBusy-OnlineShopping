import React from 'react';
import styles from './home.module.css';
import { useValues } from '../../Store/CartContext';

const Aside = () => {
    const { priceRange, setPriceRange, selectedCategories, setSelectedCategories } = useValues();

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            setSelectedCategories([...selectedCategories, category]);
        } else {
            setSelectedCategories(selectedCategories.filter(cat => cat !== category));
        }
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
                    max="1000"
                    value={priceRange}
                    className={styles.priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
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
