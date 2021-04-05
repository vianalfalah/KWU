import React, { Component } from "react";
import { logout } from "./../../redux/action/auth";
import * as action from "./../../redux/action";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Profile from "../../component/Profile";
import Message from "../../component/Message";
import Notifications from "../../component/Notifications";
import Navbar from "../../component/Navbar";
import Post from "../Post/Post";
import "./Home.scss";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Divider,
  Drawer,
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
            <Grid item sm={12} container>
              <Grid item className="hidden flex1">
                <Card
                  style={{
                    position: "fixed",
                  }}
                  className="distance2"
                >
                  <Profile />
                </Card>
              </Grid>

              <Grid item style={{ marginBottom: 30 }} className="flex2">
                <Post />
              </Grid>

              <Grid
                className="hidden flex3"
                item
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{ height: "90vh" }}
              >
                <Grid
                  item
                  sm={6}
                  container
                  justify="flex-start"
                  direction="column"
                  alignItems="center"
                >
                  <div
                    style={{ position: "fixed", marginTop: 10 }}
                    className="notif-container"
                  >
                    <Card raised={true}>
                      <Accordion>
                        <AccordionSummary
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Grid container justify="center">
                            <Typography align="center">Your Notif's</Typography>
                          </Grid>
                        </AccordionSummary>
                        <AccordionDetails className="scroll">
                          <Notifications />
                        </AccordionDetails>
                      </Accordion>
                    </Card>
                  </div>
                </Grid>

                <Grid
                  item
                  sm={6}
                  container
                  justify="flex-end"
                  direction="column"
                  alignItems="center"
                >
                  <div
                    style={{ position: "fixed" }}
                    className="message-container"
                  >
                    <Card raised={true}>
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
                        <AccordionDetails className="scroll">
                          <Message />
                        </AccordionDetails>
                      </Accordion>
                    </Card>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </>
    );
  }
}

export default Home;
