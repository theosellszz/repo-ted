import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './admin/Login';
import AdminPanel from './admin/AdminPanel';
import ProtectedRoute from './admin/ProtectedRoute';

const MainRoutes = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute user={user}>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
