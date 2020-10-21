import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as views from "@views";
import { Default } from "@templates";
import { NetworkStatus } from "@components";

const App = () => {
  return (
    <Default>
      <NetworkStatus />
      <Switch>
        <Route exact path="/" component={views.Home} />
        <Route exact path="/components" component={views.Components} />
      </Switch>
    </Default>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));