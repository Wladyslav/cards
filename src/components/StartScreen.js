import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { CardsAppContext } from "../context/context";
import Button from "../components/Button";

const StartScreen = () => {
  const { handleGameStatus, fetchDeck, highScore } = useContext(
    CardsAppContext
  );

  useEffect(() => {
    fetchDeck();
  }, []);
  return (
    <StartScreenWrapper>
      <Button clickHandler={handleGameStatus}>Start game</Button>
      <h1>Record: {highScore}</h1>
    </StartScreenWrapper>
  );
};

const StartScreenWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1 {
    margin-top: 150px;
    font-size: 40px;
    font-family: var(--ff-primary);
  }
`;
export default StartScreen;
