import { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <TextField label="Email" fullWidth onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <TextField label="Password" type="password" fullWidth onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
    </Container>
  );
}

export default Login;
