
 # Disaster Relief App

# Project Overview

The Disaster Relief App is a web application designed to assist communities affected by natural disasters by providing real-time information, emergency contacts, donation opportunities, and a platform for volunteers to connect with those in need.

Features

🔹 User Authentication – Signup/Login for users and volunteers.



🔹 Request Assistance – Users can request help for food, medical aid, and shelter.

🔹 Volunteer Registration – Volunteers can register and assist victims.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



# Tech Stack

(Frontend )
React.js
Materialui
Axios (for API calls)


Backend (Node.js + Express.js)

Node.js

Express.js

MongoDB (Mongoose for ORM)

JWT (for authentication)

bcrypt.js (for password hashing)

# Project Setup

 git clone https://github.com/Nandani567/disaster-relief-app.git
 cd disaster-relief-app

 # Backend Setup

 cd backend
npm install  
npm start

# Frontend Setup

cd frontend
npm install  
npm start


# Project Structure

disaster-relief-app/
│── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Disaster.js
│   │   ├── Volunteer.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── disasterRoutes.js
│   │   ├── volunteerRoutes.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── disasterController.js
│   │   ├── volunteerController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   ├── config/
│   │   ├── db.js
│   ├── server.js
│   ├── .env
│
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   ├── context/
│   │   │   ├── AuthContext.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── .env
│
│── README.md

# Backend .env file (inside backend folder)

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=6d53b3bc778571736b086639e6b0458a6205705f6f80eaf31032fb54f23efa1e

# Frontend .env file (inside frontend folder)

REACT_APP_API_URL=http://localhost:5000

#  Running the Project

cd backend
npm start

# Start the frontend:

cd frontend
npm start




