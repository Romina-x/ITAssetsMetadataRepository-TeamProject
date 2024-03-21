import React from "react";
import { Avatar, Typography, Grid, Card, CardContent } from "@mui/material";
import AssetPieChart from "./Pie"; // Import the AssetPieChart component

import styles from "../style/Dashboard.module.css"; // Import the CSS module file

export default function Dashboard() {
  const user = {
    // Example user data
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://via.placeholder.com/150",
  };

  return (
    <div className={styles.root}>
      <main>
        <Grid container spacing={10} justifyContent="left">
          <Grid item xs={12} sm={8} md={6}>
            <Typography variant="h4" gutterBottom>
              User Infomation
            </Typography>
            <Avatar alt={user.name} src={user.avatar} />
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {user.email}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Asset Distribution
            </Typography>
            {/* Description of the app */}
            <Typography variant="body1" gutterBottom>
              This dashboard displays the distribution of assets by type.
            </Typography>
            {/* AssetPieChart component */}
            <AssetPieChart />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
