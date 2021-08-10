import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Title = styled.div`
  color: #424242;
  font-size: 42px;
  line-height: 67.2px;
`;

const Search = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

const Header = () => {
  return (
    <>
      <Container>
        <Title>Movie App</Title>
        <Search type="text" placeholder="Search..." />
      </Container>
    </>
  );
};

export default Header;
