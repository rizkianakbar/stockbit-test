import { actionTypes } from "../contants/actionTypes";

const initialState = {
  movie: [
    {
      id: 1,
      title: "The Dark Knight",
      year: 2008,
      image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
    },
  ],
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_MOVIE:
      return state;
    default:
      return state;
  }
};
