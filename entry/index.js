import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as views from "@views";
import { Default } from "@templates";

const App = () => {
  return (
    <Default>
      <Switch>
        <Route exact path="/" component={views.Home} />
      </Switch>
    </Default>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));