import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { useAppDispatch } from "../../app/store";
import { fetchLogout } from "../../features/auth/state/authSlice";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    justifyContent: "flex-end",
    display: "flex",
    backgroundColor: "lightGray",
  },
}));

export default function TopMenu() {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={() => {
            dispatch(fetchLogout());
          }}
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
