import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { readerListItems, userListItems, adminListItems } from "./listItems";
import AssetInput from "./AssetInput";
import TypeInput from './TypeInput';
import ViewLogs from './ViewLogs';
import AssetDelete from './AssetDelete';
import TypeDelete from './TypeDelete';
import OpenAsset from './OpenAsset';
import OpenType from './OpenType';
import AssetFind from './AssetFind';
import TypeFind from './TypeFind';
import EditAsset from './EditAsset';
import TypeEdit from './TypeEdit';
import UserFind from './UserFind';


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Team 04
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "black",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    backgroundColor: "black",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
  
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard(props) {
  const role = sessionStorage.role;
  console.log(role);
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h4"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, fontFamily: "Calibri" }}
            >
              {props.page.toLowerCase().includes("asset")&& !props.page.toLowerCase().includes("find") && <p>Asset</p>}
              {props.page.toLowerCase().includes("type") && !props.page.toLowerCase().includes("find") && <p>Type</p>}
              {props.page.toLowerCase().includes("find") && props.page.toLowerCase().includes("asset") && <p>Search Assets</p>}
              {props.page.toLowerCase().includes("find") && props.page.toLowerCase().includes("type") && <p>Search Types</p>}
              {props.page.toLowerCase().includes("find") && props.page.toLowerCase().includes("user") && <p>Search Users</p>}

            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={{}}>
              <Badge badgeContent={8} color="secondary">
                <AccountCircleIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">{role === 'USER' ? userListItems : role === 'ADMIN' ? adminListItems : readerListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            marginTop: "64px",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ width: "100%" }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12}>
                {props.page === "asset/add" && <AssetInput />}
                {props.page === "asset/edit" && <EditAsset />}
                {props.page === "type/add" && <TypeInput />}
                {props.page === "log/view" && <ViewLogs />}
                {props.page === "asset/delete" && <AssetDelete />}
                {props.page === "type/delete" && <TypeDelete />}
                {props.page === "asset/open" && <OpenAsset />}
                {props.page === "type/open" && <OpenType />}
                {props.page === "asset/find" && <AssetFind />}
                {props.page === "type/find" && <TypeFind />}
                {props.page === "type/edit" && <TypeEdit />}
                {props.page === "user/find" && <UserFind />}



              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
