import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setMovieDetails,
  removeSelectedMovie,
} from "../../redux/actions/movieActions";
import {
  Card,
  ImgContainer,
  Image,
  Content,
  Title,
  Desc,
  Img,
  ListDesc,
  CardContainer,
  Container,
  Spinner,
} from "./styled";

const MovieDetails = ({ id }) => {
  const detailMovies = useSelector((state) => state.detailMovies);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  console.log(detailMovies);

  useEffect(() => {
    if (id && id !== "") fetchDetailsMovies();
    return () => {
      dispatch(removeSelectedMovie());
    };
  }, [id]);

  const fetchDetailsMovies = async () => {
    const response = await axios
      .get(`https://www.omdbapi.com/?apikey=3bada22a&t=${id}&plot=full`)
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
    dispatch(setMovieDetails(response.data));
  };

  return (
    <>
      {loading ? (
        <Container>
          <Spinner viewBox="0 0 50 50">
            <circle
              className="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="4"
            />
          </Spinner>
        </Container>
      ) : (
        <CardContainer>
          <Card>
            <ImgContainer>
              <Image>
                <Img
                  small={detailMovies.Poster}
                  large={detailMovies.Poster}
                  alt={detailMovies.Title}
                />
                ;
              </Image>
            </ImgContainer>
            <Content>
              <Title>{detailMovies.Title}</Title>
              <ListDesc>
                <p>
                  <strong>Year : </strong>
                  <span>{detailMovies.Type}</span>
                </p>
                <p>
                  <strong>Rated : </strong>
                  <span>{detailMovies.Rated}</span>
                </p>
                <p>
                  <strong>Released : </strong>
                  <span>{detailMovies.Released}</span>
                </p>
                <p>
                  <strong>Runtime : </strong>
                  <span>{detailMovies.Runtime}</span>
                </p>
                <p>
                  <strong>Genre : </strong>
                  <span>{detailMovies.Genre}</span>
                </p>
                <p>
                  <strong>Director : </strong>
                  <span>{detailMovies.Director}</span>
                </p>
                <p>
                  <strong>Writer : </strong>
                  <span>{detailMovies.Writer}</span>
                </p>
                <p>
                  <strong>Actors : </strong>
                  <span>{detailMovies.Actors}</span>
                </p>
              </ListDesc>

              <Desc>
                <h2>Plot: </h2>
                <p>{detailMovies.Plot}</p>
              </Desc>
            </Content>
          </Card>
        </CardContainer>
      )}
    </>
  );
};
export default MovieDetails;
