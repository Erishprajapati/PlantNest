import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve stored user data
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if username and password match the stored data
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      // Navigate to home page
      navigate('/home');
    } else {
      alert('Invalid username or password');
    }
  };

  // Styles as a JavaScript object
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#e0f7fa', // Light teal background
    },
    form: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#00796b', // Dark teal
    },
    label: {
      display: 'block',
      fontWeight: 'bold',
      marginBottom: '8px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #00796b', // Dark teal
      borderRadius: '4px',
      fontSize: '16px',
      transition: 'border-color 0.3s ease',
    },
    inputFocus: {
      borderColor: '#004d40', // Darker teal on focus
      outline: 'none', // Remove default outline
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#00796b', // Dark teal
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      marginBottom: '10px', // Add some space below the button
    },
    buttonHover: {
      backgroundColor: '#004d40', // Darker teal on hover
    },
    paragraph: {
      textAlign: 'center',
      marginTop: '10px',
      color: '#555',
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleLogin}>
        <h2 style={styles.heading}>Login</h2>
        <div>
          <label style={styles.label}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
            onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
            onBlur={(e) => (e.target.style.borderColor = '#00796b')}
          />
        </div>
        <div>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
            onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
            onBlur={(e) => (e.target.style.borderColor = '#00796b')}
          />
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Login
        </button>
        <p style={styles.paragraph}>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
