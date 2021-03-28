import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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

// const openMessage = Boolean(message);
// const id = openMessage ? "simple-popover" : undefined;
export default class Message extends Component {
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
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ListItem>
          <ListItem button onClick={(e) => this.handleOpenMessage(e)}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ListItem>
          <ListItem button onClick={(e) => this.handleOpenMessage(e)}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ListItem>
          <ListItem button onClick={(e) => this.handleOpenMessage(e)}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ListItem>
          <ListItem button onClick={(e) => this.handleOpenMessage(e)}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ListItem>
          <ListItem button onClick={(e) => this.handleOpenMessage(e)}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ListItem>
        </List>
      </div>
    );
  }
}
