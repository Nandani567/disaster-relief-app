import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ShelterList from "./pages/ShelterList"; 
import ShelterDetails from "./pages/ShelterDetails"; 
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "80vh", padding: "20px" }}>
        <Routes>
          {/* Define routes with the 'element' prop instead of 'component' */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shelters" element={<ShelterList />} />
          <Route path="/shelter/:id" element={<ShelterDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;