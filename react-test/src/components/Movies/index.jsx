import React, { useState, useRef, useCallback } from "react";
import MovieSearch from "./MovieSearch";
import { Search, SearchContainer } from "./styled";
import { Container, Card, CardImage, CardContent, Button } from "./styled";
import { Link } from "react-router-dom";

export default function Movie() {
  const [keyword, setQuery] = useState("batman");
  const [pageNumber, setPageNumber] = useState(1);

  const { movies, hasMore, loading, error } = MovieSearch(keyword, pageNumber);

  const observer = useRef();
  const lastMovieRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }
  console.log(movies);
  return (
    <>
      <SearchContainer>
        <Search type="text" value={keyword} onChange={handleSearch}></Search>
      </SearchContainer>
      {movies.map((movie, index) => {
        if (movies.length === index + 1) {
          return (
            <Container ref={lastMovieRef} key={index}>
              <Card>
                <CardImage>
                  <img src={movie.image} alt="asdasdsad" />
                </CardImage>
                <CardContent>
                  <h2>{movie.title}</h2>
                  <p>
                    <strong>Type : </strong>
                    <span>{movie.type}</span>
                  </p>
                  <p>
                    <strong>Year : </strong>
                    <span>{movie.year}</span>
                  </p>
                  <Link to={`/products/${index}`}>
                    <Button href="#">Detail</Button>
                  </Link>
                </CardContent>
              </Card>
            </Container>
          );
        } else {
          return (
            <Container key={index}>
              <Card>
                <CardImage>
                  <img src={movie.image} alt="asdasdsad" />
                </CardImage>
                <CardContent>
                  <h2>{movie.title}</h2>
                  <p>
                    <strong>Type : </strong>
                    <span>{movie.type}</span>
                  </p>
                  <p>
                    <strong>Year : </strong>
                    <span>{movie.year}</span>
                  </p>
                  <Link to={`/products/${index}`}>
                    <Button href="#">Detail</Button>
                  </Link>
                </CardContent>
              </Card>
            </Container>
          );
        }
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </>
  );
}
