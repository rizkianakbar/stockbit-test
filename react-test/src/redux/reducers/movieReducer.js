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
