import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMovie } from "../../redux/actions/movieActions";
import axios from "axios";

const MovieSearch = (keyword, pageNumber) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  // const [data, setData] = useState({});

  useEffect(() => {
    setMovies([]);
  }, [keyword]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "http://www.omdbapi.com",
      params: { apikey: "3bada22a", s: keyword, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        if (res.data.Response !== "False") {
          // setData(res.data.Search);
          setMovies((prevBooks) => {
            return [
              ...new Set([
                ...prevBooks,
                ...res.data.Search.map((book) => {
                  return {
                    title: book.Title,
                    image: book.Poster,
                    year: book.Year,
                    type: book.Type,
                    rating: book.imdbRating,
                  };
                }),
              ]),
            ];
          });
          // setMovies(
          //   res.data.Search.map((book) => {
          //     return {
          //       title: book.Title,
          //       image: book.Poster,
          //       year: book.Year,
          //       plot: book.Plot,
          //       rating: book.imdbRating,
          //     };
          //   })
          // );
          setHasMore(res.data.Search.length > 0);
          setLoading(false);
          dispatch(setMovie(movies));
        }
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [keyword, pageNumber]);

  return { loading, error, movies, hasMore };
};

export default MovieSearch;
