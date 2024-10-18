import React from 'react';
import profilePhoto from './Images/A48F49D6-0D0D-48C2-9485-01ECD85628EC_1_105_c.jpeg'; // Adjust the path to your image

const Contact = () => {
  const styles = {
    contact: {
      textAlign: 'center',
      padding: '20px',
    },
    profilePhoto: {
      width: '150px', // Adjust size as needed
      height: '150px', // Set height to maintain square shape
      borderRadius: '0%', // Change to 0% for square shape, or adjust as needed for rectangle
      marginBottom: '20px', // Space below photo
      objectFit: 'cover', // Maintain aspect ratio and cover the entire area
    },
    about: {
      marginTop: '20px',
    },
    footer: {
      marginTop: '40px',
      fontSize: '14px',
      color: '#555',
    },
  };

  return (
    <div style={styles.contact}>
      <h2>Contact Us</h2>
      <div className="contact-info">
        <img src={profilePhoto} alt="Erish Prajapati" style={styles.profilePhoto} />
        <h3>Erish Prajapati</h3>
        <p>Email: <a href="mailto:irishmjn@gmail.com">irishmjn@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/eris-prajapati-a744ba259/">View Profile</a></p>
        <p>GitHub: <a href="https://github.com/Erishprajapati">View Profile</a></p>
      </div>
      <div style={styles.about}>
        <h4>About Our Indoor Plants Website</h4>
        <p>
          We offer a wide variety of indoor plants delivered right to your doorstep within 48 hours! Our collection includes everything from low-maintenance succulents to beautiful flowering plants, each carefully selected to enhance your living space. 
        </p>
        <p>
          At PlantNest, we understand the importance of greenery in your home, not just for aesthetics but also for improving air quality and boosting your mood. With our easy-to-use online platform, you can browse our extensive selection, read about each plant's care requirements, and make informed choices.
        </p>
        <p>
          We partner with reliable local growers and logistics providers in Nepal, ensuring that your plants are delivered fresh and healthy. Our efficient delivery system is designed to meet the growing demand for indoor plants, making it convenient for you to enjoy nature without the hassle of visiting multiple stores. 
        </p>
        <p>
          Join us in creating greener homes and workplaces. Explore our collection today and bring nature into your home!
        </p>
      </div>
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Erish Prajapati. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
