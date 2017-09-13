// @flow

import { combineReducers } from "redux";
import { SET_SEARCH_MOVIE, ADD_API_DATA } from "./actions";

const searchMovie = (state = "", action: Action) => {
  if (action.type === SET_SEARCH_MOVIE) {
    return action.payload;
  }
  return state;
};

const apiData = (state = {}, action: Action) => {
  if (action.type === ADD_API_DATA) {
    return Object.assign({}, state, { [action.payload.movieId]: action.payload });
  }
  return state;
};

const rootReducer = combineReducers({ searchMovie, apiData });

export default rootReducer;
