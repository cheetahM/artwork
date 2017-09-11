import React from "react";
import { shape, string } from "prop-types";
import styled from "styled-components";

// ~~~~~~~styled components~~~~~
const Wrapper = styled.div`
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

const MovieCard = props => (
  <Wrapper className="show-card">
    <Image alt={`${props.movieName} movie Poster`} src={props.thumbnailUrl} />
    <div>
      <h3>{props.movieName}</h3>
      <h4>({props.languageCode})</h4>
    </div>
  </Wrapper>
);

MovieCard.propTypes = {
  thumbnailUrl: string.isRequired,
  movieName: string.isRequired
};

export default MovieCard;
