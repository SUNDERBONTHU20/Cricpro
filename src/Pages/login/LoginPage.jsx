import React, { useState } from "react";
import { Button, Container, Typography, TextField } from "@mui/material";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = () => {
    // Handle email login functionality here
    console.log("Email login clicked");
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <Container maxWidth="xs">
      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Log In
        </Typography>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleEmailLogin} variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
          Login with Email
        </Button>
      </div>
    </Container>
  );
};

export default LoginPage;
