import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRoutes from './MainRoutes';
import './styles/global.css'; // if you have this

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainRoutes />
  </React.StrictMode>
);

