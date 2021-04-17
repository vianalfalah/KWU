import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import * as action from "../../redux/action";
import { connect } from "react-redux";
import Navbar from "../../component/Navbar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  EffectCoverflow,
  A11y,
} from "swiper";

import "./UserP.scss";

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  EffectCoverflow,
  A11y,
]);

const params = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
};

class UserP extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  componentDidMount = () => {
    let { getProfile } = this.props;
    getProfile();
  };
  render() {
    let { profile } = this.props;
    console.log(this.props);
    return (
      <>
        <Navbar />
        <Card className="user-profile-container">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ marginBottom: 50 }}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              className="container-profile"
            >
              <Card style={{ marginTop: 100, borderRadius: 15 }}>
                <Card>
                  <CardMedia>
                    <div className="container-sampul">
                      <img
                        src="https://awsimages.detik.net.id/community/media/visual/2021/03/07/genshin-impact-14_43.jpeg?w=700&q=90"
                        alt=""
                        className="img-sampul"
                      />

                      <img
                        src={profile?.user?.profile?.avatar}
                        alt=""
                        className="img-profile"
                      />
                    </div>
                  </CardMedia>
                </Card>
                <Card className="container-info-profile">
                  <Grid container direction="row">
                    <Grid style={{ padding: 15 }} item xs={12} sm={6}>
                      <Typography
                        align="left"
                        variant="h5"
                        style={{ marginTop: 15 }}
                      >
                        {profile?.user?.fullName}
                      </Typography>

                      <Typography
                        align="left"
                        variant="h5"
                        style={{ marginTop: 15 }}
                      >
                        {profile?.user?.profile?.greeting}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      style={{ padding: 15 }}
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <Card
                        style={{
                          border: "0.5px solid #00acee",
                          borderRadius: 20,
                        }}
                      >
                        <Grid container direction="row" justify="center">
                          <CardContent>
                            <Typography>
                              {profile?.user?.posts?.length > 0
                                ? profile?.user?.posts?.length
                                : 0}
                            </Typography>
                            <Typography>Posts</Typography>
                          </CardContent>

                          <CardContent>
                            <Typography>
                              {profile?.user?.arts?.length > 0
                                ? profile?.user?.arts?.length
                                : 0}
                            </Typography>
                            <Typography>Arts</Typography>
                          </CardContent>
                          <CardContent>
                            <Typography>100</Typography>
                            <Typography>Followers</Typography>
                          </CardContent>
                        </Grid>
                      </Card>
                    </Grid>
                  </Grid>
                </Card>
              </Card>
              <Card className="container-arts">
                <Swiper
                  {...params}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                >
                  {profile?.user?.arts?.map((img) => (
                    <SwiperSlide>
                      <img src={img.images} alt="card" className="card-arts" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Card>
              <Card className="container-posts">
                <GridList cellHeight={300} spacing={4}>
                  <GridListTile
                    key="Subheader"
                    cols={2}
                    style={{ height: "auto" }}
                  >
                    <ListSubheader component="div">Your Posts</ListSubheader>
                  </GridListTile>
                  {profile?.user?.posts?.map((tile) => (
                    <GridListTile key={tile.id}>
                      <img src={tile.photos[0]?.images} alt={tile.title} />
                      <GridListTileBar
                        title={tile.title}
                        // subtitle={<span>by: {tile.author}</span>}
                        actionIcon={
                          <IconButton
                            aria-label={`info about ${tile.title}`}
                            className="icon-btn"
                          >
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </GridListTile>
                  ))}
                </GridList>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProfile: (data) => dispatch(action.getProfile(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserP);
