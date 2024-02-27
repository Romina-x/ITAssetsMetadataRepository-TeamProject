import * as React from "react";
import { TextField, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const accounts = [
    {
        username : "user",
        password : "password"
    },
    {
        username : "user2",
        password : "password"
    },
    {
        username : "user3",
        password : "password"
    }
  ]

  const handleLogin = () => {
    accounts.forEach(account => {
        if (username === account.username && password === account.password) {
            window.location.href = "/asset/add";
        }
      });
    setError("Invalid username or password");
  };

  return (
    <Grid
      container
      spacing={5}
      justifyContent="center"
      style={{ minHeight: "100vh", paddingTop: "10%" }}
    >
      <Grid item xs={12} sm={6} md={4} textAlign="center">
        <Typography variant="h4">Welcome to the App</Typography>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <div></div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          fullWidth
          style={{ marginTop: "5%",marginBottom: "5%" }}
        >
          Login
        </Button>
        <Link href="/signup">
            Create A New Account
        </Link>
      </Grid>
    </Grid>
  );
}
