import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShelterDetails = () => {
  // Use useParams to get the ID from the URL
  const { id } = useParams();
  
  const [shelter, setShelter] = useState(null);
  
  // Fetch the shelter data from your API
  useEffect(() => {
    const fetchShelterDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/shelters/${id}`);  // Adjust your backend API URL if needed
        const data = await response.json();
        setShelter(data);
      } catch (error) {
        console.error('Error fetching shelter details:', error);
      }
    };

    fetchShelterDetails();
  }, [id]);

  if (!shelter) {
    return <div>Loading shelter details...</div>;  // Loading state while the data is fetched
  }

  return (
    <div>
      <h1>Shelter Details</h1>
      <h2>{shelter.name}</h2>
      <p>{shelter.description}</p>
      <p><strong>Location:</strong> {shelter.location}</p>
      <p><strong>Capacity:</strong> {shelter.capacity}</p>
      <p><strong>Contact:</strong> {shelter.contact}</p>
      <p><strong>Services:</strong> {shelter.services.join(', ')}</p>
    </div>
  );
};

export default ShelterDetails;
