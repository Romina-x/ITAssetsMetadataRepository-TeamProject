import * as React from "react";
import { TextField, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import * as LoginAPI from "../utility/LoginAPI";
let attempts = 1;

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);


  const handleLogin = async () => {
    setLoading(true);
    setError("");
    if (attempts < 3) {
	    try {
	      const response = await LoginAPI.login({
	        username,
	        password
	      });
	      if (response.message.toLowerCase().includes("successful")) {
	        localStorage.setItem("token", response.token);
	        window.location.href = "asset/find";
	      } 
	    } catch (error) {
	      console.log(error);
	      attempts++;
	      setError("Invalid username or password, attempts remaining: " + (4 - attempts));
	    } finally {
	      setLoading(false);
	    }
	    } else {
	      setError("Max attempts exceeded");
	      setLoading(false);
		}
  };

  return (
    <Grid
      container
      spacing={5}
      justifyContent="center"
      style={{ minHeight: "100vh", paddingTop: "10%" }}
    >
      <Grid item xs={12} sm={6} md={4} textAlign="center">
        <Typography variant="h4">Welcome to the 
        IT Assets Metadata Repository</Typography>
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
          {loading ? "Logging in ..." : "Login"}
        </Button>
        <Link href="/signup">
            Create A New Account
        </Link>
      </Grid>
    </Grid>
  );
}
