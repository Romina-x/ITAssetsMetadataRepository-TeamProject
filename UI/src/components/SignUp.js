import * as React from "react";
import { Grid, TextField, Typography, Button } from "@mui/material";
import Login from "./Login";

export default function SignUp() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [retypePassword, setRetypePassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const handleReturn = () => {
    window.location.href = "/";
  };

  const handleSignUp = () => {
    if (retypePassword === password) {
      setSuccess(true);
      setError("");
      setUsername("");
      setPassword("");
      setRetypePassword("");
      console.log({
        username,
        password,
      });
    } else {
      setSuccess(false);
      setPassword("");
      setRetypePassword("");
      setError("Password not match !");
    }
  };
  return (
    <Grid
      container
      spacing={5}
      justifyContent="center"
      style={{ minHeight: "100vh", paddingTop: "10%", paddingBottom: "5%" }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        spacing={5}
        justifyContent="center"
        textAlign="center"
      >
        <Typography variant="h4" style={{ paddingBottom: "5%" }}>
          Create Your Account Here
        </Typography>
        {success === false ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <p style={{ color: "Green" }}>Create new user success</p>
        )}
        <TextField
          label="Username"
          placeholder="username"
          value={username}
          fullWidth
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          fullWidth
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Retype Password"
          type="password"
          placeholder="username"
          fullWidth
          value={retypePassword}
          onChange={(e) => setRetypePassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSignUp}
          fullWidth
          style={{ marginTop: "5%", marginBottom: "5%" }}
        >
          SignUp
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleReturn}
        >
          Return to login
        </Button>
      </Grid>
    </Grid>
  );
}
