import React from 'react';
import './Product.css'; // Import CSS file for Product component styling

function Product() {
  const videoUrl = 'https://www.example.com/video.mp4https://youtu.be/hlwlM4a5rxg';

  return (
    <div className="product-container">
      <div className="product-details">
        <video controls>
          <source src={videoUrl} type="video/mp4" />
          <img src="path_to_image" alt="Product Image" />
        </video>
        <h1>Title</h1>
        <p>Description</p>
        <p>Category: Category Name</p>
        <p>Owner: Owner Name</p>
        <p>Published: Publication Date</p>
      </div>
      <div className="product-actions">
        <button className="like-button">Like</button>
        <button className="dislike-button">Dislike</button>
        <button>Share</button>
        <button>Add to library</button>
        <button>Actions</button>
      </div>
    </div>
  );
}

export default Product;
