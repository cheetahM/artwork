import React, { Component } from "react";
import movies from "../../payload.json";
import MovieCard from "./MovieCard";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchMovie: ""
    };

    this.handleSearchMovieChange = this.handleSearchMovieChange.bind(this);
  }
  handleSearchMovieChange = event => {
    this.setState({ searchMovie: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <header>
          <h1>Bash's netflix Lounge</h1>
          <input
            onChange={this.handleSearchMovieChange}
            value={this.state.searchMovie}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {movies
            .filter(
              movie =>
                `${movie.movieId} ${movie.languageCode}`.toUpperCase().indexOf(this.state.searchMovie.toUpperCase()) >=
                0
            )
            .map(movie => <MovieCard key={movie.thumbnailUrl} {...movie} />)}
        </div>
      </div>
    );
  }
}

export default Search;
