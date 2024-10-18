import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom'; // Import Navigate
import Navbar from './Component/Navbar';
import Home from './Component/Home';
// import Shop from './Pages/Shop';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
import Login from './Component/User/Login';
import Register from './Component/User/Register';

function App() {
  const location = useLocation();  // Get the current route

  // Determine if the current route is either "/login" or "/register"
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="App">
      {!isAuthPage && <Navbar />} {/* Only show Navbar if not on login/register */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
