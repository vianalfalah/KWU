import React, { Component } from "react";
import { logout } from "./../../redux/action/auth";
import * as action from "./../../redux/action";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Navbar from "../../component/Navbar";
import Profile from "../../component/Profile";
import Message from "../Message/Message";
import Post from "../Post/Post";
import "./Home.scss";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Grid,
  Hidden,
  Typography,
} from "@material-ui/core";

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Card className="home-container">
          <Grid container>
            <Grid item xs={12} sm container>
              <Hidden xsDown smDown mdDown>
                <Grid item sm={3}>
                  <Profile />
                </Grid>
              </Hidden>
              <Grid item sm={5} container justify="center">
                <Post />
              </Grid>
              <Hidden xsDown smDown mdDown>
                <Grid item sm={4}>
                  <Card className="message-container distance" raised={true}>
                    <Accordion>
                      <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Grid container justify="center">
                          <Typography align="center">Your Message's</Typography>
                        </Grid>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <Message />
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Card>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </Card>
      </>
    );
  }
}

export default Home;
