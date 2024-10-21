import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => { };

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
          <Avatar sx={{ m: 1, bgcolor: "#000000" , width: '70px', height: '70px'}}>
            <LockOutlined sx = {{ fontSize: '50px'}}/>
          </Avatar>
          <Typography variant="h4">Login</Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#4DB6AC', // Changes the border color on focus
                  },
                },
                '& label.Mui-focused': {
                  color: '#000000', // Changes the label color on focus
                },
              }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#4DB6AC', // Changes the border color on focus
                  },
                },
                '& label.Mui-focused': {
                  color: '#000000', // Changes the label color on focus
                },
              }}
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, fontSize: "20px", backgroundColor: '#000000', color: '#fff' }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Grid container justifyContent={"flex-center"}>
              <Grid item>
                <Link to="/signup">Don't have an account? <span className="text-teal-600">Sign-Up</span></Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;