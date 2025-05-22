import React from 'react';
import { Link } from 'react-router-dom';
import './styles/global.css';

const App = () => (
  <div className="app-container">
    <h1>Welcome to The Resell Hub</h1>
    <nav>
      <Link to="/products">Products</Link>
      <Link to="/login">Admin Login</Link>
    </nav>
  </div>
);

export default App;
