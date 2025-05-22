import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (email === 'ted914063@gmail.com') {
      onLogin(email);
    } else {
      alert('Unauthorized');
    }
  };

  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h2>Admin Login</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter admin email"
        style={{ padding: '0.5rem', marginRight: '0.5rem' }}
      />
      <button onClick={handleLogin} style={{ padding: '0.5rem' }}>
        Login
      </button>
    </div>
  );
};

export default Login;
