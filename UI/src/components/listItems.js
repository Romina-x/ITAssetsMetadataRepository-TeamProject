import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import SourceIcon from "@mui/icons-material/Source";
import { Link } from "react-router-dom";
import styles from "../style/listItems.module.css";
import SearchIcon from '@mui/icons-material/Search';


export const adminListItems = (
  <React.Fragment>
    <Link to="/" className={styles.link}>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link to="/asset/view" className={styles.link}>
      <ListItemButton>
        <ListItemIcon>
          <SourceIcon />
        </ListItemIcon>
        <ListItemText primary="View Assets" />
      </ListItemButton>
    </Link>
    <Link to="/type/view" className={styles.link}>
      <ListItemButton>
        <ListItemIcon>
          <SourceIcon />
        </ListItemIcon>
        <ListItemText primary="View Types" />
      </ListItemButton>
    </Link>
    <Link to="/log/view" className={styles.link}>
      <ListItemButton>
        <ListItemIcon>
          <SourceIcon />
        </ListItemIcon>
        <ListItemText primary="View Logs" />
      </ListItemButton>
    </Link>
    <Link to="/asset/find" className={styles.link}>
      <ListItemButton>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary="Find Asset" />
      </ListItemButton>
    </Link>
    <Link to="/" className={styles.link}>
      <ListItemButton>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Log out" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const userListItems = (
  <React.Fragment>
    <Link to="/" className={styles.link}>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link to="/asset/view" className={styles.link}>
      <ListItemButton>
        <ListItemIcon>
          <SourceIcon />
        </ListItemIcon>
        <ListItemText primary="View Asset" />
      </ListItemButton>
    </Link>
    <Link to="/asset/find" className={styles.link}>
      <ListItemButton>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary="Find Asset" />
      </ListItemButton>
    </Link>
    <Link to="/" className={styles.link}>
      <ListItemButton>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Log out" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
