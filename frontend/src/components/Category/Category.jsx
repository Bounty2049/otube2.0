import React from 'react';
import './Category.css'; // Import CSS file for Category component styling
import Button from '../Button/Button';

function Category() {
  return (
    <div className="category-container">
      <h2>Categories</h2>
      <ul className="category-list">
        <li><Button /></li>
        <li><Button /></li>
        <li><Button /></li>
      </ul>
    </div>
  );
}

export default Category;
