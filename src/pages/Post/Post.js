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
import * as action from "../../redux/action";
import { connect } from "react-redux";
import moment from "moment";
SwiperCore.use([Navigation, Pagination, Scrollbar, Thumbs, A11y]);

class CardPost extends Component {
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

  handleExpandClick = (id) => {
    // this.setState((prevState) => ({
    //   moreInfo: !prevState.moreInfo,
    // }));
    let { moreInfo } = this.state;
    this.setState({ moreInfo: !moreInfo });
  };

  handleCommetClick = () => {
    let { comment } = this.state;
    this.setState({ comment: !comment });
  };
  render() {
    let { moreInfo, comment, openShare, likeIt, options } = this.state;
    let { post } = this.props;
    const params = {
      zoom: true,
      autoHeight: true,
    };
    return (
      <>
        <Card key={post.id} className="post-container" raised={true}>
          <CardHeader
            avatar={
              post?.createdBy?.profile?.avatar === "default" ? (
                <Avatar aria-label="recipe" style={{ backgroundColor: "blue" }}>
                  S
                </Avatar>
              ) : (
                <Avatar aria-label="recipe">
                  <img
                    src={post?.createdBy?.profile?.avatar}
                    alt="foto-post"
                    className="post-profile-image"
                  />
                </Avatar>
              )
            }
            action={
              <IconButton
                aria-label="settings"
                onClick={() => this.openOptions()}
              >
                <MoreVert />
              </IconButton>
            }
            title={post.createdBy.fullName}
            subheader={moment(post?.createdAt).format("yyyy-MM-DD")}
          />
          <Hidden xsDown>
            <Swiper
              spaceBetween={30}
              slidesPerView="auto"
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {post.photos.map((img) => (
                <SwiperSlide>
                  <img
                    src={img.images}
                    alt="card"
                    className="image-post-card"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Hidden>
          <Hidden smUp>
            <Swiper
              spaceBetween={30}
              slidesPerView="auto"
              scrollbar={{ draggable: true }}
              {...params}
            >
              {post.photos.map((img) => (
                <SwiperSlide>
                  <img
                    src={img.images}
                    alt="card"
                    className="image-post-card"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Hidden>

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.title}
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
              <Typography paragraph>{post.description}</Typography>
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
      </>
    );
  }
}

class Post extends Component {
  componentDidMount = () => {
    let { getPosts } = this.props;
    getPosts();
  };

  render() {
    let { post } = this.props;
    console.log(post);
    return (
      <div>
        {post?.listPost?.posts?.map((item) => (
          <CardPost key={item.id} post={item} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getPosts: (data) => dispatch(action.getPosts(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
