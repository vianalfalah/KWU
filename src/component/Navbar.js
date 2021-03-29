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
  Popper,
  Fade,
  TextField,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import "./component.scss";
import { logout } from "../redux/action/auth";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Message from "./Message";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.title,
});

export default function Navbar(props) {
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
    console.log(notif);
  };
  const handleOpenSearch = (event) => {
    setSearch(!search);
  };

  const onSubmitLogout = () => {
    logout();
    history.push("/");
  };

  const onSubmitHome = () => [history.push("/home")];
  const onSubmitProfile = () => [history.push("/profile")];

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
            <Typography
              variant="h5"
              gutterBottom
              button
              style={{ cursor: "pointer" }}
              onClick={onSubmitHome}
            >
              Sobu
            </Typography>
            {/* <Hidden smUp>
              <div className="input-search">
                <IconButton
                  type="submit"
                  aria-label="search"
                  onClick={handleOpenSearch}
                >
                  <SearchIcon />
                </IconButton>
                {search == true && (
                  <InputBase
                    placeholder="Search"
                    inputProps={{ "aria-label": "search" }}
                    style={{ margin: 10 }}
                  />
                )}
              </div>
            </Hidden> */}
          </Grid>
          <Grid>
            <Hidden xsDown>
              <div className="input-search">
                <IconButton type="submit" aria-label="search">
                  <SearchIcon />
                </IconButton>
                {/* <InputBase
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                  style={{ margin: 10 }}
                /> */}
                <Autocomplete
                  id="filter-demo"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  filterOptions={filterOptions}
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <div ref={params.InputProps.ref}>
                      <InputBase
                        placeholder="Search"
                        inputProps={{ "aria-label": "search" }}
                        {...params.inputProps}
                      />
                    </div>
                  )}
                />
              </div>
            </Hidden>
          </Grid>
          <Grid
            container
            directions="row"
            justify="flex-end"
            alignContent="center"
          >
            <Hidden smUp>
              <IconButton
                aria-label="show 4 new mails"
                color="inherit"
                onClick={handleOpenMessage}
              >
                <Badge badgeContent={4} color="secondary">
                  <i className="fa fa-envelope"></i>
                </Badge>
              </IconButton>

              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={handleOpenNotif}
              >
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
            </Hidden>

            <Popover
              id={id}
              open={openNotif}
              anchorEl={notif}
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
              <Box
                p={2}
                style={{ width: 400, backgroundColor: "white", marginTop: 10 }}
              >
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

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings: The Two Towers", year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  { title: "Star Wars: Episode VI - Return of the Jedi", year: 1983 },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  { title: "Eternal Sunshine of the Spotless Mind", year: 2004 },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
