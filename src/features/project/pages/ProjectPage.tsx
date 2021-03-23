import React from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, Switch, Route } from "react-router-dom";
import ProjectList from "../components/ProjectList";
import { routes } from "../../../common/routes";

const useStyles = makeStyles((theme) => ({
  header: {
    paddingBottom: "25px",
  },
  root: {
    padding: "25px",
  },
}));

const ProjectsPage = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  return (
    <>
      <div className={classes.root}>
        <Typography variant="h3" component="h3" className={classes.header}>
          Проекты
        </Typography>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          aria-label="disabled tabs example"
        >
          <Tab
            label="Список проектов"
            onClick={() => {
              history.push(`${routes.projects.list}`);
            }}
          />
          <Tab
            label="Дорожные карты"
            onClick={() => {
              history.push(`${routes.projects.roadmaps}`);
            }}
          />
        </Tabs>
        <Switch>
          <Route exact path={routes.projects.list} component={ProjectList} />
        </Switch>
      </div>
    </>
  );
};

export default ProjectsPage;
