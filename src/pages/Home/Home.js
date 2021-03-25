import React, { Component } from "react";
import { logout } from "./../../redux/action/auth";
import * as action from "./../../redux/action";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Navbar from "../../component/Navbar";
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

        <Grid container>
          <Grid item xs={12} sm container>
            <Grid item sm={8} container justify="flex-end" className="post">
              <Post />
            </Grid>
            <Hidden xsDown smDown mdDown>
              <Grid item sm={4}>
                <Card className="message-container" raised={true}>
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
      </>
    );
  }
}

export default Home;
