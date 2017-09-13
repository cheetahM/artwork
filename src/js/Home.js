// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import type { RouterHistory } from "react-router-dom";
import { setSearchMovie } from "./actionCreators";

class Home extends Component {
  props: {
    searchMovie: string,
    handleSearchMovieChange: Function,
    history: RouterHistory
  };
  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.history.push("/search");
  };
  render() {
    return (
      <div className="app">
        <div className="landing">
          <h1>Netflix Lounge</h1>
          <form onSubmit={this.goToSearch}>
            <input
              onChange={this.props.handleSearchMovieChange}
              value={this.props.searchMovie}
              type="text"
              placeholder="Search Movie"
            />
          </form>
          <Link to="/search">or Browse All</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchMovie: state.searchMovie });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchMovieChange(event) {
    dispatch(setSearchMovie(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
