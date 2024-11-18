import React, { useState } from 'react';
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import { LockOutlined } from '@mui/icons-material';

const ownerSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axiosInstance.post('/register/ownersignup', { name, email, password });
      localStorage.setItem('OwnerInfo', JSON.stringify(response.data));
      console.log(response);
      navigate('/dashboardshelter');
    } catch (error) {
      console.error(error);
      alert(error.response?.data.message || 'Registration failed, please try again.');
    }
  };

  return (
    <>
    <Container className="hello" maxWidth="xs">
       <CssBaseline />
       <Box
         sx={{
          mt: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#000000", width: "70px", height: "70px" }}>
          <LockOutlined sx={{ fontSize: "50px" }} />
        </Avatar>
        <Typography variant="h4">Owner SignUp</Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#4DB6AC",
                    },
                  },
                  "& label.Mui-focused": {
                    color: "#000",
                  },
                }}
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#4DB6AC",
                    },
                  },
                  "& label.Mui-focused": {
                    color: "#000",
                  },
                }}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#4DB6AC",
                    },
                  },
                  "& label.Mui-focused": {
                    color: "#000",
                  },
                }}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, fontSize: "20px", backgroundColor: "#000", color: "#fff" }}
            onClick={handleRegister}
          >
            Sign Up
          </Button>
          <Grid container justifyContent={"flex-center"}>
            <Grid item>
              <Link to="/ownerlogin">Already have an account? <span className="text-teal-600">Login</span></Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    </>
  );
};

export default ownerSignUp;
