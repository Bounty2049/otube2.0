import React from 'react';
import './Footer.css'; // Import CSS file for Footer component styling

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
