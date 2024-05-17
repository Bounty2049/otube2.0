import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import Category from './components/Category/Category';
import Footer from './components/Footer/Footer';

export default function App() {

  return (
    <div className='wrapper'>
      <Navbar />
      <div className='main'>
        <Category />
        <Product />
      </div>
      <Footer />
    </div>
  )
}


