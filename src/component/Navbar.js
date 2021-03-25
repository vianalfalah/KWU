import {
  Box,
  Card,
  Divider,
  Fade,
  Grid,
  Hidden,
  Paper,
  Popover,
  Popper,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import "./component.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { borders } from "@material-ui/system";

export default function Navbar() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [search, setSearch] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSearch(null);
  };

  const handleOpenSearch = (event) => {
    setSearch(search ? null : event.currentTarget);
  };

  const onSubmitLogout = () => {
    // logout();
    history.push("/landing");
  };

  const open = Boolean(anchorEl);
  const openSearch = Boolean(search);
  const id = open || openSearch ? "simple-popover" : undefined;

  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: "#327f49" }}
        className="navbar"
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
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <i className="fa fa-envelope"></i>
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <i className="fa fa-bell"></i>
              </Badge>
            </IconButton>
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
              <Box p={2}>
                <Typography style={{ cursor: "pointer", marginBottom: 10 }}>
                  <span className="fa fa-user-circle"></span> Profile
                </Typography>
                <Typography style={{ cursor: "pointer", marginBottom: 10 }}>
                  <span className="fa fa-cog"></span> Setting Account
                </Typography>
                <hr />
                <Typography
                  style={{ cursor: "pointer", marginTop: 10 }}
                  onClick={onSubmitLogout}
                >
                  <span className="fa fa-sign-out"></span> Log Out
                </Typography>
              </Box>
            </Popover>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
