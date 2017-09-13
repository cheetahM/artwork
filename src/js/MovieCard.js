// @flow

import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// ~~~~~~~styled components~~~~~
const Wrapper = styled((Link: any))`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  text-decoration: none;
  color: black;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;
class MovieCard extends Component {
  shouldComponentUpdate() {
    return false;
  }
  props: Movie;
  render() {
    return (
      <Wrapper className="movie-card" to={`/details/${this.props.movieId}`}>
        <Image alt={`${this.props.movieName} movie Poster`} src={this.props.thumbnailUrl} />
        <div>
          <h3>{this.props.movieName}</h3>
          <h4>({this.props.languageCode})</h4>
        </div>
      </Wrapper>
    );
  }
}

export default MovieCard;
