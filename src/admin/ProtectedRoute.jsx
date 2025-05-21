import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
  return user === 'ted914063@gmail.com' ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
