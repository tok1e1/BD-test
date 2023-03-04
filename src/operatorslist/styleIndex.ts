import styled from "styled-components";

export const StyledBackground = styled.section`
  margin: 10;
  background-color: #a8a091;
  height: 100vh;
  font-family: "Rubik", sans-serif;
`;

export const OperatorSelectionWrapper = styled.div`
  padding-top: 10px;
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  font-size: 25px;
  margin-top: 500px;
  background-color: #ffffff;
  color: #030200;
  width: 60vw;
  height: 30vh;
  border-radius: 10px;
  @media (max-width: 425px) {
    font-size: 30px;
  }
`;

export const OperatorSelectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

export const OperatorSelectionTitle = styled.h1`
  font-size: 25px;
`;

export const OperatorCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const OperatorCardContainer = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  cursor: pointer;
  margin: 0.5rem;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.2s ease-in-out;
  width: 6rem;
  height: 6rem;

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(-0.125rem);
  }

  &:active {
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
    transform: translateY(0);
  }
`;
