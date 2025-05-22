import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'AirPods Pro 1:1', img: '/airpods.jpg' },
  { id: 2, name: 'Luxury Cologne 1:1', img: '/cologne.jpg' },
  { id: 3, name: 'Designer Hoodie 1:1', img: '/hoodie.jpg' },
];

const Products = () => (
  <div>
    <h2>Our Products</h2>
    <div className="product-grid">
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  </div>
);

export default Products;
