// @flow

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import type { Match } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./Home";
import Search from "./Search";
import Details from "./Details";
import movies from "../../payload.json";

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={props => <Search movies={movies} {...props} />} />
          <Route
            path="/details/:id"
            component={(props: { match: Match }) => {
              const selectedMovie = movies.find(movie => props.match.params.id === movie.movieId.toString());
              return <Details movie={selectedMovie} {...props} />;
            }}
          />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default App;
