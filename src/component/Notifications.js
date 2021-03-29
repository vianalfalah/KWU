import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Popover,
  Popper,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notif: false,
    };
  }

  handleOpenMessage = (e) => {
    let { notif } = this.state;

    this.setState({ notif: !notif && e.currentTarget });
  };

  handleMessageClose = () => {
    this.setState({ notif: false });
  };

  render() {
    let { notif } = this.state;
    return (
      <div>
        <List>
          <ListItem button onClick={(e) => this.handleOpenMessage(e)}>
            <Box style={{ display: "flex" }}>
              <Avatar>
                <img
                  src="https://imgsrv2.voi.id/6ZvuxpxT0BydtTJzbeP80WiwzxRZmiO-3kDrC3NqcYs/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yODQ3My8yMDIxMDEyMzE0MTktbWFpbi5jcm9wcGVkXzE2MTEzOTk5NzMuanBn.jpg"
                  alt="card"
                  className="card-image"
                />
              </Avatar>
              <Typography>Test</Typography>
            </Box>
          </ListItem>
          <ListItem button onClick={(e) => this.handleOpenMessage(e)}>
            <Box style={{ display: "flex" }}>
              <Avatar>
                <img
                  src="https://imgsrv2.voi.id/6ZvuxpxT0BydtTJzbeP80WiwzxRZmiO-3kDrC3NqcYs/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yODQ3My8yMDIxMDEyMzE0MTktbWFpbi5jcm9wcGVkXzE2MTEzOTk5NzMuanBn.jpg"
                  alt="card"
                  className="card-image"
                />
              </Avatar>
              <Typography>Test</Typography>
            </Box>
          </ListItem>
          <ListItem button onClick={(e) => this.handleOpenMessage(e)}>
            <Box style={{ display: "flex" }}>
              <Avatar>
                <img
                  src="https://imgsrv2.voi.id/6ZvuxpxT0BydtTJzbeP80WiwzxRZmiO-3kDrC3NqcYs/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yODQ3My8yMDIxMDEyMzE0MTktbWFpbi5jcm9wcGVkXzE2MTEzOTk5NzMuanBn.jpg"
                  alt="card"
                  className="card-image"
                />
              </Avatar>
              <Typography>Test</Typography>
            </Box>
          </ListItem>
          <ListItem button onClick={(e) => this.handleOpenMessage(e)}>
            <Box style={{ display: "flex" }}>
              <Avatar>
                <img
                  src="https://imgsrv2.voi.id/6ZvuxpxT0BydtTJzbeP80WiwzxRZmiO-3kDrC3NqcYs/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yODQ3My8yMDIxMDEyMzE0MTktbWFpbi5jcm9wcGVkXzE2MTEzOTk5NzMuanBn.jpg"
                  alt="card"
                  className="card-image"
                />
              </Avatar>
              <Typography>Test</Typography>
            </Box>
          </ListItem>
          <ListItem button onClick={(e) => this.handleOpenMessage(e)}>
            <Box style={{ display: "flex" }}>
              <Avatar>
                <img
                  src="https://imgsrv2.voi.id/6ZvuxpxT0BydtTJzbeP80WiwzxRZmiO-3kDrC3NqcYs/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yODQ3My8yMDIxMDEyMzE0MTktbWFpbi5jcm9wcGVkXzE2MTEzOTk5NzMuanBn.jpg"
                  alt="card"
                  className="card-image"
                />
              </Avatar>
              <Typography>Test</Typography>
            </Box>
          </ListItem>
          <ListItem button onClick={(e) => this.handleOpenMessage(e)}>
            <Box style={{ display: "flex" }}>
              <Avatar>
                <img
                  src="https://imgsrv2.voi.id/6ZvuxpxT0BydtTJzbeP80WiwzxRZmiO-3kDrC3NqcYs/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yODQ3My8yMDIxMDEyMzE0MTktbWFpbi5jcm9wcGVkXzE2MTEzOTk5NzMuanBn.jpg"
                  alt="card"
                  className="card-image"
                />
              </Avatar>
              <Typography>Test</Typography>
            </Box>
          </ListItem>
        </List>
      </div>
    );
  }
}
