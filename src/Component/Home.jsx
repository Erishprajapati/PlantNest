import React, { useState, useEffect } from 'react';

const Home = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch plant data from a public API or mock API
    const fetchPlants = async () => {
      try {
        const response = await fetch('https://api.example.com/plants'); // Replace with real API
        if (!response.ok) {
          throw new Error('Failed to fetch plant data');
        }
        const data = await response.json();
        setPlants(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  if (loading) {
    return <p>Loading plants...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="plant-feed">
      {plants.map((plant) => (
        <div key={plant.id} className="plant-card">
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
