import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useState } from "react";
import React from "react"
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {};

  return (
    <>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#000000", width: '70px', height: '70px'}}>
            <LockOutlined sx={{ fontSize: '50px' }}/>
          </Avatar>
          <Typography variant="h4">SignUp</Typography>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: '#4DB6AC', // Changes the border color on focus
                    },
                  },
                  '& label.Mui-focused': {
                    color: '#000', // Changes the label color on focus
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
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: '#4DB6AC', // Changes the border color on focus
                    },
                  },
                  '& label.Mui-focused': {
                    color: '#000', // Changes the label color on focus
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
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: '#4DB6AC', // Changes the border color on focus
                    },
                  },
                  '& label.Mui-focused': {
                    color: '#000', // Changes the label color on focus
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
              sx={{ mt: 3, mb: 2 , fontSize:"20px", backgroundColor: '#000000', color: '#fff' }}
              onClick={handleRegister}
            >
              Sign-Up
            </Button>
            <Grid container justifyContent="flex-start">
              <Grid item>
                <Link to="/login">Already have an account?  <span className="text-teal-600">  Login</span></Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SignUp;