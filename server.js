// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const cors = require('cors');
// const User = require('./models/User'); // Ensure this file exists

// const app = express();
// const PORT = process.env.PORT || 5000;
// const JWT_SECRET = process.env.JWT_SECRET || '6d53b3bc778571736b086639e6b0458a6205705f6f80eaf31032fb54f23efa1e';
// const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/disaster_relief';

// // Middleware
// app.use(express.json());
// app.use(cors({
//   origin: "http://localhost:3000", // Adjust if frontend runs on a different port
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true, // Allow credentials (important for authentication)
// }));
// // MongoDB Connection
// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log(" MongoDB Connected"))
// .catch(err => console.error(" MongoDB Connection Error:", err));

// // Signup Route
// app.post('/api/auth/signup', async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ message: 'Username and password are required' });
//   }

//   try {
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, password: hashedPassword });
//     await newUser.save();

//     const token = jwt.sign({ id: newUser._id, username: newUser.username }, JWT_SECRET, { expiresIn: '1h' });

//     res.status(201).json({ token, message: 'User registered successfully' });
//   } catch (err) {
//     console.error(" Signup Error:", err);
//     res.status(500).json({ message: 'Error signing up' });
//   }
// });

// //  Login Route
// app.post('/api/auth/login', async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ message: 'Username and password are required' });
//   }

//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ message: 'User not found' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

//     res.status(200).json({ token, message: 'Login successful' });
//   } catch (err) {
//     console.error("Login Error:", err);
//     res.status(500).json({ message: 'Error logging in' });
//   }
// });

// // Start the Server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.use("/auth", authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

