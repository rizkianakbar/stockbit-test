import { combineReducers } from "redux";
import { movieReducer, selectedMovieReducer } from "./movieReducer";

const reducers = combineReducers({
  allMovies: movieReducer,
  detailMovies: selectedMovieReducer,
});

export default reducers;
