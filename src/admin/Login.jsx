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
    <div>
      <h2>Admin Login</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter admin email" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
