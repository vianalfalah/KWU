import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./component.scss";
import user_icon from "../utils/images/user.png";
import user_setting_icon from "../utils/images/setting-user.png";
import log_out_icon from "../utils/images/log-out.png";
import { useHistory } from "react-router";
export default function Profile() {
  const history = useHistory();
  const onSubmitLogout = () => {
    // logout();
    history.push("/");
  };
  return (
    <div>
      <Card className="profile-container" raised={true}>
        <CardMedia>
          <img
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            alt="img-profile"
            width="200"
            height="200"
          />
        </CardMedia>
        <CardHeader title="My Name"></CardHeader>
        <CardContent>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <img src={user_icon} alt="icon-user" width="25" height="25" />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <img
                  src={user_setting_icon}
                  alt="icon-user"
                  width="25"
                  height="25"
                />
              </ListItemIcon>
              <ListItemText primary="Account Setting" />
            </ListItem>
            <hr />
            <ListItem button onClick={onSubmitLogout}>
              <ListItemIcon>
                <img
                  src={log_out_icon}
                  alt="icon-user"
                  width="25"
                  height="25"
                />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
