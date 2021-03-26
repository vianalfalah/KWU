import {
  Box,
  Grid,
  Hidden,
  Popover,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Badge,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import "./component.scss";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Message from "../pages/Message/Message";

export default function Navbar() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [search, setSearch] = React.useState(false);
  const [notif, setNotif] = React.useState(false);
  const [message, setMessage] = React.useState(false);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(anchorEl ? false : event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(false);
    setSearch(false);
    setNotif(false);
    setMessage(false);
  };

  const handleOpenMessage = (event) => {
    setMessage(message ? false : event.currentTarget);
  };
  const handleOpenNotif = (event) => {
    setNotif(notif ? false : event.currentTarget);
  };
  const handleOpenSearch = (event) => {
    setSearch(search ? false : event.currentTarget);
  };

  const onSubmitLogout = () => {
    // logout();
    history.push("/");
  };

  const open = Boolean(anchorEl);
  const openSearch = Boolean(search);
  const openNotif = Boolean(notif);
  const openMessage = Boolean(message);
  const id =
    open || openSearch || openNotif || openMessage
      ? "simple-popover"
      : undefined;

  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: "#00acee" }}
        className="navbar"
        position="fixed"
      >
        <Toolbar>
          <Grid container direction="row" justify="center" alignItems="center">
            <Typography variant="h5" gutterBottom>
              Sobu
            </Typography>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Hidden xsDown>
              <div className="input-search">
                <IconButton type="submit" aria-label="search">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                  style={{ margin: 10 }}
                />
              </div>
            </Hidden>
            <Hidden only={["sm", "md", "xl", "lg"]}>
              <div className="input-search">
                <IconButton
                  type="submit"
                  aria-label="search"
                  onClick={handleOpenSearch}
                >
                  <SearchIcon />
                </IconButton>
                <Popover
                  id={id}
                  open={openSearch}
                  anchorEl={search}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <InputBase
                    placeholder="Search"
                    inputProps={{ "aria-label": "search" }}
                    style={{ margin: 10 }}
                  />
                </Popover>
              </div>
            </Hidden>
          </Grid>
          <Grid
            container
            directions="row"
            justify="start-end"
            alignContent="center"
          >
            <Hidden only={["sm", "md", "xl", "lg"]}>
              <IconButton
                aria-label="show 4 new mails"
                color="inherit"
                onClick={handleOpenMessage}
              >
                <Badge badgeContent={4} color="secondary">
                  <i className="fa fa-envelope"></i>
                </Badge>
              </IconButton>
            </Hidden>
            <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleOpenNotif}
            >
              <Badge badgeContent={17} color="secondary">
                <i className="fa fa-bell"></i>
              </Badge>
            </IconButton>
            <Popover
              id={id}
              open={openNotif}
              anchorEl={notif}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Box p={2} style={{ width: 400 }}>
                <Typography style={{ cursor: "pointer", marginBottom: 10 }}>
                  <span className="fa fa-user-circle"></span> Notif 1
                </Typography>
                <Typography style={{ cursor: "pointer", marginBottom: 10 }}>
                  <span className="fa fa-user-circle"></span> Notif 2
                </Typography>
                <Typography style={{ cursor: "pointer", marginTop: 10 }}>
                  <span className="fa fa-user-circle"></span> Notif 3
                </Typography>
              </Box>
            </Popover>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <i className="fa fa-user-circle"></i>
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                  <ListItemIcon>
                    <span className="fa fa-user-circle"></span>
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <span className="fa fa-cogs"></span>
                  </ListItemIcon>
                  <ListItemText primary="Account Setting" />
                </ListItem>
                <hr />
                <ListItem button onClick={onSubmitLogout}>
                  <ListItemIcon>
                    <span className="fa fa-sign-out"></span>
                  </ListItemIcon>
                  <ListItemText primary="Log Out" />
                </ListItem>
              </List>
            </Popover>

            <Popover
              id={id}
              open={openMessage}
              anchorEl={message}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Box p={2}>
                <Message />
              </Box>
            </Popover>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
