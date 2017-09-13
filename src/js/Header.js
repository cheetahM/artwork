// @flow

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchMovie } from "./actionCreators";

const Header = (props: { movieSearch?: boolean, handleSearchMovieChange: Function, searchMovie: string }) => {
  let utilSpace;
  if (props.movieSearch) {
    utilSpace = (
      <input onChange={props.handleSearchMovieChange} value={props.searchMovie} type="text" placeholder="Search" />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">Back</Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">Netflix Lounge</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  movieSearch: false
};

const mapStateToProps = state => ({ searchMovie: state.searchMovie });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchMovieChange(event) {
    dispatch(setSearchMovie(event.target.value));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
