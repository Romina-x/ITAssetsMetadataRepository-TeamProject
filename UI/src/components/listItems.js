import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import SourceIcon from "@mui/icons-material/Source";
import { Link } from "react-router-dom";
import styles from "../style/listItems.module.css";
import DeleteIcon from '@mui/icons-material/Delete';


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
        <ListItemText primary="View Asset" />
      </ListItemButton>
    </Link>
    <Link to="/type/add" className={styles.link}>
      <ListItemButton>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Add Type" />
      </ListItemButton>
    </Link>
    <Link to="/type/edit" className={styles.link}>
      <ListItemButton>
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText primary="Edit Type" />
      </ListItemButton>
    </Link>
    <Link to="/type/delete" className={styles.link}>
      <ListItemButton>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="Delete Type" />
      </ListItemButton>
    </Link>
    <Link to="/type/view" className={styles.link}>
      <ListItemButton>
        <ListItemIcon>
          <SourceIcon />
        </ListItemIcon>
        <ListItemText primary="View Type" />
      </ListItemButton>
    </Link>
    <Link to="/log/view" className={styles.link}>
      <ListItemButton>
        <ListItemIcon>
          <SourceIcon />
        </ListItemIcon>
        <ListItemText primary="View Log" />
      </ListItemButton>
    </Link>
    <Link to="/asset/open" className={styles.link}>
      <ListItemButton>
        <ListItemIcon>
          <SourceIcon />
        </ListItemIcon>
        <ListItemText primary="Open Asset" />
      </ListItemButton>
    </Link>
    <Link to="/login" className={styles.link}>
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
    <Link to="/login" className={styles.link}>
      <ListItemButton>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Log out" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
