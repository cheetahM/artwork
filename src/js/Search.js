// @flow

import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import MovieCard from "./MovieCard";

const Search = (props: { searchMovie: string, movies: Array<Movie> }) => (
  <div className="search">
    <Header movieSearch />
    <div>
      {props.movies
        .filter(
          movie => `${movie.movieId} ${movie.languageCode}`.toUpperCase().indexOf(props.searchMovie.toUpperCase()) >= 0
        )
        .map(movie => <MovieCard key={movie.thumbnailUrl} {...movie} />)}
    </div>
  </div>
);

const mapStateToProps = state => ({
  searchMovie: state.searchMovie
});

export const Unwrapped = Search;
export default connect(mapStateToProps)(Search);
