import React from "react";
import { useSelector } from "react-redux";

const MovieList = () => {
  const movies = useSelector((state) => state);
  console.log(movies);
  return <div>MovieList</div>;
};

export default MovieList;
