import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page">
      <h1>Welcome to the Resell Shop</h1>
      <p>We offer premium 1:1 products at unbeatable prices.</p>
      <Link to="/products" className="btn">View Products</Link>
    </div>
  );
};

export default Home;
