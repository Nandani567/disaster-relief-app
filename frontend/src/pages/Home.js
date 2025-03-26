import React, { useState } from 'react';
import { Button, Modal, Box } from '@mui/material';
import Login from '../components/Login';  // Correct path if Login is inside src/components
import SignUp from '../components/Signup';  // Correct path if SignUp is inside src/components


const Home = () => {
  const [open, setOpen] = useState(false);  // For modal open/close
  const [isLogin, setIsLogin] = useState(true);  // To determine if it's login or signup

  const handleOpen = () => setOpen(true);  // Open modal
  const handleClose = () => setOpen(false);  // Close modal

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Get Started Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        style={{ fontSize: '20px', padding: '10px 20px', marginBottom: '20px' }}
      >
        Get Started
      </Button>

      {/* Modal for Login / Signup */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: 400,
            margin: 'auto',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            marginTop: '150px',
          }}
        >
          {/* Switch between Login and Signup */}
          <div>
            <Button
              variant={isLogin ? "contained" : "outlined"}
              color="primary"
              onClick={() => setIsLogin(true)} // Show login form
              style={{ marginRight: '10px', width: '100%' }}
            >
              Login
            </Button>
            <Button
              variant={!isLogin ? "contained" : "outlined"}
              color="secondary"
              onClick={() => setIsLogin(false)} // Show signup form
              style={{ width: '100%' }}
            >
              Sign Up
            </Button>
          </div>

          {/* Conditionally Render Login or SignUp Form */}
          {isLogin ? (
            <Login closeModal={handleClose} />
          ) : (
            <SignUp closeModal={handleClose} />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Home;
