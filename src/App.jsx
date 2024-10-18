import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home'; // Assuming Home is in the same directory
import Login from './Component/User/Login'; // Login component from the user folder
import Register from './Component/User/Register'; // Register component from the user folder
// import Shop from './Shop'; // Assuming Shop is in the same directory
// import About from './About'; // Assuming About is in the same directory
// import Contact from './Contact'; // Assuming Contact is in the same directory

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
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
    </Router>
  );
}

export default App;
