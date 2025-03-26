const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');

// POST route for signup
router.post('/signup', signup);

// POST route for login
router.post('/login', login);

module.exports = router;

