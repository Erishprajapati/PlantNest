// src/Component/PlantDetail.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const PlantDetail = () => {
  const location = useLocation(); 
  const { plant } = location.state || {}; 

  console.log('Location State:', location.state); // Debugging line

  if (!plant) {
    return <div>Plant not found.</div>; 
  }

  return (
    <div className="plant-detail" style={styles.container}>
      <h2>{plant.name}</h2>
      <img src={plant.image} alt={plant.name} style={styles.image} />
      <p>Price: ${plant.price}</p>
      <button style={styles.orderButton}>Order Now</button>
    </div>
  );
};

// Styles as JavaScript object
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  image: {
    width: '300px', // Adjust image width as needed
    height: 'auto', // Maintain aspect ratio
    borderRadius: '8px',
  },
  orderButton: {
    backgroundColor: '#00796b',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default PlantDetail;
