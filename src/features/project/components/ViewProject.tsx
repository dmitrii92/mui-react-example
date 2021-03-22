import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Project } from "../api/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: "345px",
      minWidth: "235px",
      margin: "15px",
      maxHeight: "300px"
    },
    media: {
      height: 0,
      paddingTop: "50.58%", // 16:9
    },
  })
);

const ViewProject = (props: Project) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia image="/static/images/cat.jpg" title="project_card" className={classes.media} />
      <CardContent>
        <Typography variant="h5" component="h5">
          {props.name}
        </Typography>
        {/**TODO: как отображать когда только одна из дат?*/}
        {props.startDate && props.endDate ? (
          <Typography>
            {props.startDate} - {props.endDate} гг.
          </Typography>
        ) : null}
        <Typography>{props.manager}</Typography>
        <Typography>{props.administrator}</Typography>
      </CardContent>
      <CardActions>{/*TODO */}</CardActions>
    </Card>
  );
};

export default ViewProject;
