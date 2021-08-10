import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";

const reducers = combineReducers({
  allMovies: movieReducer,
});

export default reducers;
