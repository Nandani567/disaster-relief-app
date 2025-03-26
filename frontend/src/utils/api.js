// src/utils/api.js

// Existing functions (fetchShelters, addShelter, etc.)
export const fetchShelters = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  
  // If you want to keep fetchData, you can also export it:
  export const fetchData = fetchShelters;
  