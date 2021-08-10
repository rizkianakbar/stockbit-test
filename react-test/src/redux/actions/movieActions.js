import { actionTypes } from "../contants/actionTypes";

export const setMovie = (movie) => {
  return {
    type: actionTypes.SET_MOVIE,
    payload: movie,
  };
}

export const setMovieDetails = (movie) => {
  return {
    type: actionTypes.SET_MOVIE_DETAILS,
    payload: movie,
  };
}