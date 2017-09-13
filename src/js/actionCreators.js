// @flow

import axios from "axios";
import { SET_SEARCH_MOVIE, ADD_API_DATA } from "./actions";

export function setSearchMovie(searchMovie: string) {
  return { type: SET_SEARCH_MOVIE, payload: searchMovie };
}

export function addAPIData(apiData: Movie) {
  return { type: ADD_API_DATA, payload: apiData };
}

export function getAPIDetails(movieId: string) {
  return (dispatch: Function) => {
    axios
      .get(`http://localhost:3000/details/${movieId}`)
      .then(response => {
        dispatch(addAPIData(response.data));
      })
      .catch(error => {
        console.log("API error: ", error); // eslint-disable-line no-console
      });
  };
}
