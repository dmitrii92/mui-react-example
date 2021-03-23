import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { routes } from "../routes";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "25px",
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    "&:before": {
      backgroundColor: "black",
      width: "25px",
      height: "100%",
      position: "absolute",
      content: `""`,
      minHeight: "100%",
      marginLeft: "-25px",
    },
  },
  listItem: {
    color: "white",
    "&:hover": {
      "&:before": {
        backgroundColor: "red",
        width: "10px",
        height: "100%",
        position: "absolute",
        content: `""`,
        minHeight: "100%",
        marginLeft: "-15px",
      },
    },
  },
  listItemIcon: {
    color: "white",
  },
}));

const SideMenu = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          className={classes.listItem}
          onClick={() => {
            history.push(`${routes.tasks}`);
          }}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <SubscriptionsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Задачи и работы" />
        </ListItem>
        <ListItem
          button
          className={classes.listItem}
          onClick={() => {
            history.push(`${routes.projects.list}`);
          }}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <PermIdentityOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Проекты" />
        </ListItem>
        <ListItem
          button
          className={classes.listItem}
          onClick={() => {
            history.push(`${routes.calendar}`);
          }}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <EventAvailableOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Календарь" />
        </ListItem>
        <ListItem
          button
          className={classes.listItem}
          onClick={() => {
            history.push(`${routes.settings}`);
          }}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Возможности" />
        </ListItem>
      </List>
    </div>
  );
};

export default SideMenu;
