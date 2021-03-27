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
  Drawer,
  Grid,
  Hidden,
  Typography,
} from "@material-ui/core";

class Home extends Component {
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <Card className="home-container">
          <Grid container>
            <Grid item container>
              <Hidden xsDown smDown mdDown>
                <Grid item sm={3}>
                  <Card
                    style={{
                      position: "fixed",
                    }}
                    className="distance2"
                  >
                    <Profile />
                  </Card>
                </Grid>
              </Hidden>
              <Grid item sm={5} style={{ marginBottom: 30 }}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
              </Grid>
              <Hidden xsDown smDown>
                <Grid
                  item
                  sm={4}
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  style={{ maxHeight: "90vh" }}
                >
                  <Grid
                    item
                    sm={6}
                    container
                    justify="flex-start"
                    direction="column"
                    alignItems="center"
                  >
                    <div style={{ position: "fixed" }}>
                      <Card
                        className="message-container distance"
                        raised={true}
                      >
                        <Accordion>
                          <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Grid container justify="center">
                              <Typography align="center">
                                Your Notif's
                              </Typography>
                            </Grid>
                          </AccordionSummary>
                          <AccordionDetails style={{ maxHeight: 200 }}>
                            <Typography>
                              <Message />
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </Card>
                    </div>
                  </Grid>

                  <Grid
                    item
                    sm={6}
                    container
                    direction="column"
                    justify="flex-end"
                    alignItems="center"
                  >
                    <div style={{ position: "fixed" }}>
                      <Card
                        className="message-container distance3"
                        raised={true}
                      >
                        <Accordion>
                          <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Grid container justify="center">
                              <Typography align="center">
                                Your Messaage's
                              </Typography>
                            </Grid>
                          </AccordionSummary>
                          <AccordionDetails
                            style={{ overflowY: "scroll", maxHeight: "40vh" }}
                          >
                            <Typography>
                              <Message />
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </Card>
                    </div>
                  </Grid>
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
