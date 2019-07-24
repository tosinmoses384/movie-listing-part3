import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

const Routes = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;
