import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Retrieve stored user data
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    // Check if user data exists
    if (storedUser) {
      const confirmation = window.confirm(`Do you want to logout, ${storedUser.username}?`);
      
      if (confirmation) {
        // Clear user data from localStorage
        localStorage.removeItem('user');
        
        // Redirect to login page after logout
        navigate('/login');
      }
    }
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><Link to="/shop" style={styles.link}>Shop</Link></li>
        <li style={styles.navItem}><Link to="/contact" style={styles.link}>Contact</Link></li>
        <li style={styles.navItem}>
          <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

// CSS Styles as JavaScript Object
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'flex-end', // Align items to the right
    padding: '10px 20px',
    backgroundColor: '#00796b',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    gap: '20px', // Space between links
  },
  navItem: {
    color: 'white',
    textDecoration: 'none',
  },
  link: {
    color: 'white', // Ensure link color matches the theme
    textDecoration: 'none', // Remove underline from links
  },
  logoutButton: {
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Navbar;
