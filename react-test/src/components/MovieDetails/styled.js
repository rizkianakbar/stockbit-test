import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 100px !important;
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (min-width: 992px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Card = styled.div`
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }
`;

export const ImgContainer = styled.div`
  overflow: hidden;

  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Image = styled.div`
  display: flex;
  width: 100%;
  transition: all 0.5s ease;
  img {
    max-width: 100%;
  }
`;

export const Content = styled.div`
  padding: 2rem 1rem;

  @media screen and (min-width: 992px) {
    padding-top: 0;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  text-transform: capitalize;
  font-weight: 700;
  position: relative;
  color: #12263a;
  margin: 1rem 0;

  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    width: 80px;
    background: #12263a;
  }
`;

export const Desc = styled.div`
  h2 {
    text-transform: capitalize;
    color: #12263a;
    padding-bottom: 0.6rem;
  }
  p {
    font-size: 0.9rem;
    padding: 0.3rem;
    opacity: 0.8;
  }
`;

export const ListDesc = styled.div`
  font-size: 0.9rem;
  padding: 0.3rem;
  opacity: 0.8;
`;
