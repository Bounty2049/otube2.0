import React from 'react';
import './Product.css'; 


function Product() {
  const videoUrl = 'https://www.example.com/video.mp4https://youtu.be/hlwlM4a5rxg';

  return (
    <div className="product-container">
      <div className="product-details">
        <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw3HApB4bsvabXW3L14cV-LhFo0L71QmEESJN3vW9Ow&s" alt="" />
        <a href='/course/id'>Курс по React разработке на JavaScript от DOV school</a>
        <p>Школа: ProductStar</p>
        <p>Курс: Фронтэнд разработка</p>
      </div>
      <div className="product-actions">
        <a href=''>
          <img src="/src/images/product/star.svg" alt="Отзывы" />
        </a>
        <a href=''>
          <img src="/src/images/product/message.svg" alt="Комментарии" />
        </a>
        <a href='' type=''>
          <img src="/src/images/product/share.svg" alt="Поделиться" />
        </a>
        <button><img src="/src/images/product/heart.svg" alt="" /></button>
        <button><img src="/src/images/product/dots.svg" alt="" /></button>
      </div>
      <div className='price'>
        <p>1500 р</p>
      </div>
    </div>
  );
}

export default Product;
