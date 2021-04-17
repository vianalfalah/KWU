import { Card, Grid, GridList, GridListTile } from "@material-ui/core";
import React, { Component } from "react";
import * as action from "../../redux/action";
import { connect } from "react-redux";
import Navbar from "../../component/Navbar";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./AllPost.scss";
class AllPost extends Component {
  componentDidMount = () => {
    let { getPosts } = this.props;
    getPosts();
  };

  handleClick = () => {
    alert("test");
  };

  render() {
    let { post } = this.props;

    const rand = [2, 3];
    return (
      <div>
        <Navbar />
        <Card className="posts-container">
          <Grid className="container-grid">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry columnsCount={3}>
                {post?.listPost?.posts?.map((img, i) => (
                  <img
                    key={i}
                    src={img.photos[0]?.images}
                    style={{ width: "100%", display: "block" }}
                    alt=""
                    onClick={() => this.handleClick()}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </Grid>
        </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllPost);
