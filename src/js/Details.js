// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { getAPIDetails } from "./actionCreators";
import Header from "./Header";
import Spinner from "./Spinner";

class Details extends Component {
  componentDidMount() {
    if (!this.props.movieName) {
      this.props.getAPIData();
    }
  }
  props: {
    movie: Movie,
    movieName: string,
    getAPIData: Function
  };
  render() {
    const { movieId, movieName, fullSizeImageUrl, languageCode, imageType } = this.props.movie;
    let detailsComponent;
    if (this.props.movieName) {
      detailsComponent = (
        <section>
          <h1>{`Movie Name: ${movieName}`}</h1>
          <h3>{`Movie ID: ${movieId}`}</h3>
          <img src={fullSizeImageUrl} alt={`Poster for ${movieName}`} />
          <h3>{`Movie Image type: ${imageType}`}</h3>
          <h3>{languageCode}</h3>
        </section>
      );
    } else {
      detailsComponent = (
        <section>
          <Spinner />;
        </section>
      );
    }
    return (
      <div className="details">
        <Header />
        {detailsComponent}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.movie.movieId] ? state.apiData[ownProps.movie.movieId] : {};
  return {
    movieName: apiData.movieName
  };
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getAPIData() {
    dispatch(getAPIDetails(ownProps.movie.movieId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
