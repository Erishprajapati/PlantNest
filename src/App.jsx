import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Login from './Component/User/Login';
import Register from './Component/User/Register';
import Shop from './Component/Shop'; // Make sure to import the Shop component
import PlantDetail from './Component/PlantDetail'; // Import the PlantDetail component

function App() {
  const location = useLocation();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  const isAuthenticated = () => {
    return localStorage.getItem('user') !== null;
  };

  return (
    <div className="App">
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={isAuthenticated() ? <Home /> : <Navigate to="/login" />} />
        <Route path="/shop" element={isAuthenticated() ? <Shop /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/plants/:id" element={isAuthenticated() ? <PlantDetail /> : <Navigate to="/login" />} /> {/* Update this route */}
      </Routes>
    </div>
  );
}

// Wrap the App component with Router
const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
