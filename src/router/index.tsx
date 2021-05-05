import React, { FC } from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import { AddIcCall, Contacts, Face } from "@material-ui/icons";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import Me from "../pages/Me";
import Add from "../pages/Add";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav: {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(1.5),
    },
  })
);

const NoMatch: FC = () => {
  return <h1>404 page</h1>;
};

const RouterComponent: FC = () => {
  const state = useSelector((state) => state);
  const classes = useStyles();
  console.log("router", state);

  return (
    <Container maxWidth="xs">
      <Router>
        <Grid
          className={classes.nav}
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item>
            <Link to="/">
              <Contacts style={{ color: "#fff" }} />
              <Typography style={{ color: "#fff" }}>Contacts</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/me">
              <Face style={{ color: "#fff" }} />
              <Typography style={{ color: "#fff" }}>Me</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/add">
              <AddIcCall style={{ color: "#fff" }} />
              <Typography style={{ color: "#fff" }}>Add</Typography>
            </Link>
          </Grid>
        </Grid>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/me">
            <Me />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default RouterComponent;
