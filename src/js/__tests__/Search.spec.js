import React from "react";
import { shallow } from "enzyme";
import Movies from "../../../payload.json";
import Search from "../Search";
import MovieCard from "../MovieCard";

test("Search renders correctly", () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test("Search should render correct number of movies", () => {
    const component = shallow(<Search />);
    expect(component.find(MovieCard).length).toEqual(Movies.length);
});

test("Search should render correct number of movies based on search term", () => {
    const searchMovie = "en";
    const component = shallow(<Search />);
    component.find('input').simulate("change",{target:{value: searchMovie}});
    const movieCount = Movies.filter(movie =>
        `${movie.movieId} ${movie.languageCode}`.toUpperCase().indexOf(searchMovie.toUpperCase()) >= 0
    ).length;

    expect(component.find(MovieCard).length).toEqual(movieCount);
})