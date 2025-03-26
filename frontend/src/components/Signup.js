import { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/auth/signup", form);
      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container>
      <h2>Signup</h2>
      <TextField label="Username" fullWidth onChange={(e) => setForm({ ...form, username: e.target.value })} />
      <TextField label="Email" fullWidth onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <TextField label="Password" type="password" fullWidth onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <Button variant="contained" color="primary" onClick={handleSignup}>Signup</Button>
    </Container>
  );
}

export default Signup;
