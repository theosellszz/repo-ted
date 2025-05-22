import React from 'react';
import { Link } from 'react-router-dom';
import airpodsImg from '../assets/airpods.jpg';
import cologneImg from '../assets/cologne.jpg';
import hoodieImg from '../assets/hoodie.jpg';

const Products = () => {
  const products = [
    { id: 1, name: 'AirPods Pro', image: airpodsImg },
    { id: 2, name: 'Dior Cologne', image: cologneImg },
    { id: 3, name: 'Sp5der Hoodie', image: hoodieImg },
  ];

  return (
    <div className="page">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <Link to="/checkout" className="btn">Buy Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
