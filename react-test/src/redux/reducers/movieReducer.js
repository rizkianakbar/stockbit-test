import { actionTypes } from "../contants/actionTypes";

const initialState = {
  movie: [],
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_MOVIE:
      return { ...state, movie: payload };
    default:
      return state;
  }
};

export const selectedMovieReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_MOVIE_DETAILS:
      return { ...state, ...payload };
    case actionTypes.REMOVE_SELECTED_MOVIE:
      return {};
    default:
      return state;
  }
};
