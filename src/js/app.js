import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));
