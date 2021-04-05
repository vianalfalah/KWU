import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
  Popper,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import "./component.scss";
import { logout } from "../redux/action/auth";
import user_icon from "../utils/images/user.png";
import user_setting_icon from "../utils/images/setting-user.png";
import log_out_icon from "../utils/images/log-out.png";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/action";

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.user);
  const history = useHistory();
  const [message, setMessage] = React.useState(false);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const handleMessageClose = () => {
    setMessage(false);
  };

  const handleOpenMessage = (event) => {
    setMessage(message ? false : event.currentTarget);
  };
  const onSubmitLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  const onSubmitProfile = () => {
    history.push("/profile");
  };

  console.log(profile);
  return (
    <div>
      <Card className="profile-container" raised={true}>
        <CardMedia>
          <img
            src={profile?.profile?.avatar}
            alt="img-profile"
            style={{ borderRadius: "50%" }}
            width="200"
            height="200"
          />
        </CardMedia>
        <CardHeader title={profile.fullName}></CardHeader>
        <CardContent>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button onClick={onSubmitProfile}>
              <ListItemIcon>
                <img src={user_icon} alt="icon-user" width="25" height="25" />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button onClick={handleOpenMessage}>
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
      <Popper
        // id={id}
        open={message}
        anchorEl={message}
        transition
        placement="right"
      >
        <Box p={2} style={{ width: 400, backgroundColor: "white" }}>
          <Typography style={{ cursor: "pointer", marginBottom: 10 }}>
            <span className="fa fa-user-circle"></span> chat 1
          </Typography>
          <Typography style={{ cursor: "pointer", marginBottom: 10 }}>
            <span className="fa fa-user-circle"></span> chat 2
          </Typography>
        </Box>
      </Popper>
    </div>
  );
}
