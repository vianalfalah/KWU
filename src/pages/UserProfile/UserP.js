import { Card, CardContent, Grid } from "@material-ui/core";
import React, { Component } from "react";
import Navbar from "../../component/Navbar";

export default class UserP extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <Card>
          <Grid>
            <Grid>photo</Grid>
            <Grid>posts</Grid>
          </Grid>
        </Card>
      </>
    );
  }
}
