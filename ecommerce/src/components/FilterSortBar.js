import React from 'react';
import '../styles/FilterSortBar.css';

function FilterSortBar({ categories, selectedCategory, onCategoryChange, sortOption, onSortChange }) {
  return (
    <div className="filter-sort-bar">
      <label>
        Category:
        <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
          <option value="all">All</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
          ))}
        </select>
      </label>

      <label>
        Sort By:
        <select value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A-Z</option>
          <option value="name-desc">Name: Z-A</option>
        </select>
      </label>
    </div>
  );
}

export default FilterSortBar;
