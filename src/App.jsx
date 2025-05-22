import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <div>
      <nav style={{ padding: '1rem', background: '#111', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link>
        <Link to="/checkout" style={{ color: 'white', textDecoration: 'none' }}>Checkout</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;
