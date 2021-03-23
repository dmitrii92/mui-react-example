import React from "react";
import Grid from "@material-ui/core/Grid";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ProjectsPage from "./features/project/pages/ProjectPage";
import SideMenu from "./common/components/SideMenu";
import TopMenu from "./common/components/TopMenu";
import { routes } from "./common/routes";

function App() {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <Grid container direction="row" style={{ height: "100%" }}>
        <Grid item xs={3} xl={3} lg={3}>
          <SideMenu />
        </Grid>
        <Grid item xs={9} xl={9}>
          <TopMenu />
          <Switch>
            <Route path={routes.calendar} />
            <Route path={routes.tasks} />
            <Route path={routes.settings} />
            <Route path={routes.projects.list} component={ProjectsPage} />
          </Switch>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
