import React, { Component } from "react";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions,
  Hidden,
} from "@material-ui/core";
import {
  Favorite,
  Share,
  ExpandMore,
  MoreVert,
  Send,
} from "@material-ui/icons";
import "./Post.scss";
import CardIMG from "../../utils/images/background-landing.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  A11y,
} from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, Thumbs, A11y]);

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreInfo: false,
      comment: false,
      openShare: false,
      likeIt: false,
      options: false,
    };
  }

  onSubmitLogout = () => {
    // logout();
    this.props.history.push("/");
  };

  handleLike = () => {
    let { likeIt } = this.state;
    this.setState({ likeIt: !likeIt });
  };

  openOptions = () => {
    let { options } = this.state;
    this.setState({ options: !options });
  };

  openShared = () => {
    let { openShare } = this.state;
    this.setState({ openShare: !openShare });
  };

  handleExpandClick = () => {
    let { moreInfo } = this.state;
    this.setState({ moreInfo: !moreInfo });
  };

  handleCommetClick = () => {
    let { comment } = this.state;
    this.setState({ comment: !comment });
  };
  render() {
    let { moreInfo, comment, openShare, likeIt, options } = this.state;
    return (
      <div>
        <Card className="post-container" raised={true}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" style={{ backgroundColor: "red" }}>
                R
              </Avatar>
            }
            action={
              <IconButton
                aria-label="settings"
                onClick={() => this.openOptions()}
              >
                <MoreVert />
              </IconButton>
            }
            title="Lorem ipsum dolor sit amet"
            subheader="September 14, 2016"
          />
          <Hidden xsDown>
            <Swiper
              spaceBetween={30}
              slidesPerView="auto"
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <img src={CardIMG} alt="card" className="card-image" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://imgsrv2.voi.id/6ZvuxpxT0BydtTJzbeP80WiwzxRZmiO-3kDrC3NqcYs/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yODQ3My8yMDIxMDEyMzE0MTktbWFpbi5jcm9wcGVkXzE2MTEzOTk5NzMuanBn.jpg"
                  alt="card"
                  className="card-image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ytimg.com/vi/nSB6sOwCY3A/maxresdefault.jpg"
                  alt="card"
                  className="card-image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ytimg.com/vi/nSB6sOwCY3A/maxresdefault.jpg"
                  alt="card"
                  className="card-image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ytimg.com/vi/nSB6sOwCY3A/maxresdefault.jpg"
                  alt="card"
                  className="card-image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ytimg.com/vi/nSB6sOwCY3A/maxresdefault.jpg"
                  alt="card"
                  className="card-image"
                />
              </SwiperSlide>
            </Swiper>
          </Hidden>
          <Hidden smUp>
            <Swiper
              spaceBetween={30}
              slidesPerView="auto"
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <img src={CardIMG} alt="card" className="card-image" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://imgsrv2.voi.id/6ZvuxpxT0BydtTJzbeP80WiwzxRZmiO-3kDrC3NqcYs/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yODQ3My8yMDIxMDEyMzE0MTktbWFpbi5jcm9wcGVkXzE2MTEzOTk5NzMuanBn.jpg"
                  alt="card"
                  className="card-image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ytimg.com/vi/nSB6sOwCY3A/maxresdefault.jpg"
                  alt="card"
                  className="card-image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ytimg.com/vi/nSB6sOwCY3A/maxresdefault.jpg"
                  alt="card"
                  className="card-image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ytimg.com/vi/nSB6sOwCY3A/maxresdefault.jpg"
                  alt="card"
                  className="card-image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ytimg.com/vi/nSB6sOwCY3A/maxresdefault.jpg"
                  alt="card"
                  className="card-image"
                />
              </SwiperSlide>
            </Swiper>
          </Hidden>

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              onClick={() => this.handleLike()}
            >
              {likeIt ? (
                <i className="fa fa-heart" style={{ color: "red" }}></i>
              ) : (
                <i className="fa fa-heart"></i>
              )}
            </IconButton>
            <IconButton
              aria-label="comment"
              onClick={() => this.handleCommetClick()}
            >
              {comment ? (
                <i className="fa fa-comment" style={{ color: "blue" }}></i>
              ) : (
                <i className="fa fa-comment"></i>
              )}
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
              <IconButton aria-label="share" onClick={() => this.openShared()}>
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

        <Dialog
          open={openShare}
          onClose={() => this.openShared()}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            <Typography align="center">Share to...</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fa fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fa fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fa fa-whatsapp"></i>
                </a>
              </div>
              <div className="social-media" style={{ marginTop: 10 }}>
                <a href="#" className="social-icon">
                  <i className="fa fa-envelope-o"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fa fa-link"></i>
                </a>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>

        <Dialog
          open={options}
          onClose={() => this.openOptions()}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            <Typography align="center">Options</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Box size={10}>
                <Typography>Share This Post</Typography>
                <hr />
                <Typography>Report</Typography>
                <Typography>Save to Favorite</Typography>
                <Typography>Copy Link</Typography>
              </Box>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
