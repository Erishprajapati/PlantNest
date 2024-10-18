import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import plant1 from './Images/castiron.jpg';
import plant2 from './Images/Ficus Lyrata.jpg';
import plant3 from './Images/luckybamboo.jpg';
import plant4 from './Images/Philodendron.jpg';
import plant5 from './Images/Serene.jpg';
import plant6 from './Images/paradise.jpg';
import plant7 from './Images/Snake.jpg';
import plant8 from './Images/Rhapis Excelsa.jpg';


const styles = {
  shop: {
    textAlign: 'center',
    padding: '20px',
  },
  plantGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 4 items in one row
    gap: '20px', // Space between grid items
    marginTop: '20px',
  },
  plantCard: {
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden', // Prevents image overflow
    cursor: 'pointer', // Change cursor to pointer on hover
    transition: 'transform 0.2s', // Add transition for hover effect
    display: 'flex',
    flexDirection: 'column', // Arrange children in a column
    height: '400px', // Set a fixed height for the plant card
  },
  plantCardImage: {
    width: '100%', // Make image responsive
    height: '70%', // Set height to allow space for name and price
    objectFit: 'cover', // Maintain aspect ratio and cover the entire area
  },
  plantCardDetails: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px', // Add padding for better spacing
  },
  plantCardTitle: {
    margin: '0',
    fontSize: '18px',
  },
  plantCardPrice: {
    fontSize: '16px',
    color: '#555',
  },
};

const Shop = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Static plant data
  const plants = [
    { id: 1, name: 'Cast Iron Plant', price: 550, image: plant1 },
    { id: 2, name: 'Ficus Lyrata', price: 960, image: plant2 },
    { id: 3, name: 'Lucky Bamboo', price: 720, image: plant3 },
    { id: 4, name: 'Philodendron', price: 540, image: plant4 },
    { id: 5, name: 'Serene', price: 550, image: plant5 },
    { id: 6, name: 'Paradise', price: 850, image: plant6},
    { id: 7, name: 'Snake Plant', price: 350, image: plant7},
    { id: 8, name: 'Rhapis Excelsa', price: 950, image: plant8},
  ];

  const handlePlantClick = (plant) => {
    // Navigate to PlantDetail with the selected plant data
    navigate('/plant-detail', { state: { plant } });
  };

  return (
    <div style={styles.shop}>
      <h2>Shop Our Plants</h2>
      <div style={styles.plantGrid}>
        {plants.map((plant) => (
          <div
            key={plant.id}
            style={styles.plantCard}
            onClick={() => handlePlantClick(plant)} // Call the function with the entire plant object
          >
            <img src={plant.image} alt={plant.name} style={styles.plantCardImage} />
            <div style={styles.plantCardDetails}>
              <h3 style={styles.plantCardTitle}>{plant.name}</h3>
              <p style={styles.plantCardPrice}>Rs {plant.price}</p> {/* Changed to Nepali Rupees */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
