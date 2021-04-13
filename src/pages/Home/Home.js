import React, { Component } from "react";
import { logout } from "./../../redux/action/auth";
import * as action from "./../../redux/action";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import Upload from "../../component/UploadPost";
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
  Button,
  Card,
  Dialog,
  Divider,
  Drawer,
  Grid,
  Hidden,
  Icon,
  InputBase,
  TextField,
  Typography,
} from "@material-ui/core";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleUploadPost = () => {
    this.setState({ open: true });
  };

  handleCloseUpload = () => {
    this.setState({ open: false });
  };
  render() {
    let { open } = this.state;
    return (
      <>
        <Navbar />
        <Card className="home-container">
          <Grid container>
            <Grid item sm={12} container>
              <Grid item className="hidden flex1 ">
                <Card
                  style={{
                    position: "fixed",
                    borderRadius: 20,
                  }}
                  className="distance2"
                >
                  <Profile />
                </Card>
              </Grid>

              <Grid
                item
                style={{ marginBottom: 30, marginTop: 30 }}
                className="flex2"
              >
                <Card
                  raised={true}
                  style={{
                    border: "50% solid black",
                    borderRadius: 15,
                    height: 50,
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Grid
                      item
                      xs={2}
                      sm={2}
                      container
                      alignItems="center"
                      justify="center"
                    >
                      <PhotoCameraIcon />
                    </Grid>
                    <Grid item xs={10} sm={10} container justify="flex-start">
                      <Button onClick={() => this.handleUploadPost()}>
                        "Tell Everyone What you Shoot Today ...."
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
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
                            <Typography>Your Notif's</Typography>
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

        <Dialog open={open}>
          <div style={{ display: "flex" }}>
            <Typography>UPLOAD</Typography>
            <div className="close-button">
              <i
                onClick={() => this.handleCloseUpload()}
                className="fa fa-times"
              ></i>
            </div>
          </div>
          <Upload />
        </Dialog>
      </>
    );
  }
}

export default Home;
