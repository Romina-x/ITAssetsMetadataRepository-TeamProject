import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import SourceIcon from '@mui/icons-material/Source';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Log out" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <EditIcon />
      </ListItemIcon>
      <ListItemText primary="Edit Asset" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Add Asset" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SourceIcon />
      </ListItemIcon>
      <ListItemText primary="View Asset" />
    </ListItemButton> 
  </React.Fragment>
);