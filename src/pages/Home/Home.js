import React, { Component } from "react";
import { logout } from "./../../redux/action/auth";
import * as action from "./../../redux/action";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  CardMedia,
  CardActions,
  Collapse,
  Typography,
  Grid,
  TextField,
  Icon,
  Box,
} from "@material-ui/core";
import {
  Favorite,
  Share,
  ExpandMore,
  MoreVert,
  Send,
} from "@material-ui/icons";

import CardIMG from "../../utils/images/background-landing.jpg";
import Navbar from "../../component/Navbar";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreInfo: false,
      comment: false,
    };
  }

  onSubmitLogout = () => {
    // logout();
    this.props.history.push("/");
  };

  handleExpandClick = () => {
    this.setState({ moreInfo: !this.state.moreInfo });
  };

  handleCommetClick = () => {
    this.setState({ comment: !this.state.comment });
  };
  render() {
    let { moreInfo, comment } = this.state;

    return (
      <>
        <Navbar />
        <Card className="home-container" raised={true}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" style={{ backgroundColor: "red" }}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="Lorem ipsum dolor sit amet"
            subheader="September 14, 2016"
          />
          <CardMedia>
            <img src={CardIMG} alt="card" className="card-image" />
          </CardMedia>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              {/* <Favorite /> */}
              <i className="fa fa-heart"></i>
            </IconButton>
            <IconButton
              aria-label="comment"
              onClick={() => this.handleCommetClick()}
            >
              <i className="fa fa-comment"></i>
            </IconButton>
            <IconButton
              onClick={() => this.handleExpandClick()}
              aria-expanded={moreInfo}
              aria-label="show more"
            >
              <ExpandMore />
            </IconButton>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <IconButton aria-label="share">
                <i className="fa fa-share"></i>
              </IconButton>
            </Grid>
          </CardActions>
          <Collapse in={moreInfo} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Lorem Ipsum</Typography>
              <Typography paragraph>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Typography>
              <Typography paragraph>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </Typography>
              <Typography paragraph>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur?"
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
          <Collapse in={comment} timeout="auto" unmountOnExit>
            <Grid container justify="start-end" alignContent="center">
              <Grid item xs={2} sm={2}>
                <i className="fa fa-user-circle" style={{ fontSize: 20 }}></i>
              </Grid>
              <Grid item xs={10} sm={10}>
                <Typography align="justify">Name 1</Typography>
              </Grid>
            </Grid>
            <Grid container justify="start-end" alignContent="center">
              <Grid item xs={2} sm={2}>
                <i className="fa fa-user-circle" style={{ fontSize: 20 }}></i>
              </Grid>
              <Grid item xs={10} sm={10}>
                <Typography align="justify">Name 2</Typography>
              </Grid>
            </Grid>
            <Grid container justify="start-end" alignContent="center">
              <Grid item xs={2} sm={2}>
                <i className="fa fa-user-circle" style={{ fontSize: 20 }}></i>
              </Grid>
              <Grid item xs={10} sm={10}>
                <Typography align="justify">Name 3</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              directions="row"
              justify="start-end"
              alignItems="flex-end"
              style={{ marginBottom: 10 }}
            >
              <Grid item xs={2} sm={2}>
                <Icon>
                  <i className="fa fa-commenting"></i>
                </Icon>
              </Grid>
              <Grid item xs={8} sm={8}>
                <TextField id="comment" fullWidth />
              </Grid>
              <Grid item xs={2} sm={2}>
                <Send />
              </Grid>
            </Grid>
          </Collapse>
        </Card>
      </>
    );
  }
}

export default Home;
