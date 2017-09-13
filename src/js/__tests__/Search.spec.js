import React from "react";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../store";
import { setSearchMovie } from "../actionCreators";
import movies from "../../../payload.json";
import Search, { Unwrapped as UnwrappedSearch } from "../Search";
import MovieCard from "../MovieCard";

test("Search renders correctly", () => {
  const component = shallow(<UnwrappedSearch movies={movies} searchMovie="" />);
  expect(component).toMatchSnapshot();
});

test("Search should render correct number of movies", () => {
  const component = shallow(<UnwrappedSearch movies={movies} searchMovie="" />);
  expect(component.find(MovieCard).length).toEqual(movies.length);
});

test("Search should render correct number of movies based on search term", () => {
  const searchMovie = "en";
  const component = shallow(<UnwrappedSearch movies={movies} searchMovie={searchMovie} />);
  // component.find('input').simulate("change",{target:{value: searchMovie}});
  const movieCount = movies.filter(
    movie => `${movie.movieId} ${movie.languageCode}`.toUpperCase().indexOf(searchMovie.toUpperCase()) >= 0
  ).length;

  expect(component.find(MovieCard).length).toEqual(movieCount);
});

test("Search results using redux", () => {
  const searchMovie = "es";
  store.dispatch(setSearchMovie(searchMovie));
  const component = render(
    <Provider store={store}>
      <MemoryRouter>
        <Search movies={movies} searchMovie={searchMovie} />
      </MemoryRouter>
    </Provider>
  );

  const movieCount = movies.filter(
    movie => `${movie.movieId} ${movie.languageCode}`.toUpperCase().indexOf(searchMovie.toUpperCase()) >= 0
  ).length;

  expect(component.find(".movie-card").length).toEqual(movieCount);
});
