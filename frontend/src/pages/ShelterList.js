import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../utils/api";

const ShelterList = () => {
  const [shelters, setShelters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getShelters = async () => {
      const shelterData = await fetchData("http://localhost:5000/api/shelters");
      setShelters(shelterData);
      setLoading(false);
    };
    getShelters();
  }, []);

  if (loading) return <p>Loading shelters...</p>;

  return (
    <div>
      <h1>Shelter List</h1>
      <ul>
        {shelters.map((shelter) => (
          <li key={shelter._id}>
            <Link to={`/shelter/${shelter._id}`}>{shelter.name}</Link>
            <p>Capacity: {shelter.capacity}</p>
            <p>Available Resources: {shelter.resources.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShelterList;
