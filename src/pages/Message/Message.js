import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Grid,
  List,
  ListItem,
  Popover,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Message.scss";

// const openMessage = Boolean(message);
// const id = openMessage ? "simple-popover" : undefined;
export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notif: false,
    };
  }

  handleOpenMessage = () => {
    this.setState({ notif: true });
  };

  handleMessageClose = () => {
    this.setState({ notif: false });
  };

  render() {
    let { notif } = this.state;
    return (
      <>
        <List>
          <ListItem button onClick={() => this.handleOpenMessage()}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ListItem>
          <ListItem button>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ListItem>
          <ListItem button>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ListItem>
          <ListItem button>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ListItem>
        </List>

        <Popover
          // id={id}
          open={notif}
          anchorEl={notif}
          onClose={() => this.handleMessageClose()}
          anchorOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "right",
          }}
        >
          <Box p={2} style={{ width: 400 }}>
            <Typography style={{ cursor: "pointer", marginBottom: 10 }}>
              <span className="fa fa-user-circle"></span> chat 1
            </Typography>
            <Typography style={{ cursor: "pointer", marginBottom: 10 }}>
              <span className="fa fa-user-circle"></span> chat 2
            </Typography>
            <Typography style={{ cursor: "pointer", marginTop: 10 }}>
              <span className="fa fa-user-circle"></span> chat 3
            </Typography>
          </Box>
        </Popover>
      </>
    );
  }
}
