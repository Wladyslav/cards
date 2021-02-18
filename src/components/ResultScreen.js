import React, { useContext } from "react";
import styled from "styled-components";
import { CardsAppContext } from "../context/context";

const ResultScreen = () => {
  const { roundWon, handleNextRound } = useContext(CardsAppContext);

  if (roundWon) {
    return (
      <ResultScreenWrapper onClick={handleNextRound}>
        <h1>Won</h1>
      </ResultScreenWrapper>
    );
  } else {
    return (
      <ResultScreenWrapper onClick={handleNextRound}>
        <h1>Lose</h1>
      </ResultScreenWrapper>
    );
  }
};

const ResultScreenWrapper = styled.section`
  z-index: 5;
  height: 100vh;
  width: 100vw;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(17, 16, 16, 0.6);
  h1 {
    font-size: 60px;
    font-family: var(--ff-primary);
    background: -webkit-linear-gradient(#ffdc2a, #fb2182);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default ResultScreen;
