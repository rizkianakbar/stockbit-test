import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Search = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: #eeeeee;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #000;
  }
`;

export const Container = styled.div`
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  height: 100%;

  @media (max-width: 790px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex: 0 0 auto;
  background: #fff;
  max-width: 700px;
  margin: 80px 0;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media (max-width: 790px) {
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const CardImage = styled.div`
  border-radius: $b-r 0 0 $b-r;
  width: 300px;
  flex: 0 0 auto;
  position: relative;
  background: linear-gradient(to bottom, #9fd483, #8dc26f);
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 790px) {
    width: 100%;
    border-radius: $b-r $b-r 0 0;
    img {
      bottom: 20px;
      position: relative;
    }
  }
`;

export const CardContent = styled.div`
  padding: 2em 2em 5em;

  @media (max-width: 790px) {
    padding: 2em 2em 1em;
  }
`;

export const Button = styled.div`
  background: #8dc26f;
  color: #fff;
  padding: 0 25px;
  height: 50px;
  font-size: 0.8em;
  letter-spacing: 1px;
  line-height: 50px;
  display: inline-block;
  border-radius: 25px;
  text-decoration: none;
  margin-top: 1.5em;
  text-transform: uppercase;
  border: 1px solid rgba(0, 0, 0, 0.1);
  &:hover {
    background: #70a751;
  }
`;
