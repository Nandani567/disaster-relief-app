const express = require('express');
const router = express.Router();  // No need to import express again in the other file

// Assuming you have a Shelter model to fetch data from MongoDB
const Shelter = require('../models/Shelter');

// Define the GET route to fetch shelters
router.get('/shelters', async (req, res) => {
  try {
    const shelters = await Shelter.find();  // Fetch shelters from MongoDB
    res.json(shelters);  // Return shelters as JSON
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch shelters', error });
  }
});

// Export the router
module.exports = router;
