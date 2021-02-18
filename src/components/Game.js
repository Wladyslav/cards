import React, { useContext } from "react";
import { CardsAppContext } from "../context/context";

import styled from "styled-components";
import Player from "./Player";
import Dealer from "./Dealer";
import ResultScreen from "./ResultScreen";
import BetScreen from "./BetScreen";
import Button from "./Button";

const Game = () => {
  const { betStatus, gameResultScreen } = useContext(CardsAppContext);

  if (betStatus === true) {
    return (
      <GameWrapper>
        {gameResultScreen && <ResultScreen />}
        <Dealer />
        <Player />
        <Utils />
      </GameWrapper>
    );
  } else {
    return <BetScreen />;
  }
};
const Utils = () => {
  const {
    getUserCards,
    handleStand,
    doubleDown,
    handleReset,
    userWallet,
    stake,
    userSum,
  } = useContext(CardsAppContext);
  return (
    <UtilsWrapper>
      <Button clickHandler={getUserCards}>Hit</Button>
      <Button clickHandler={handleStand}>Stand</Button>
      <Button clickHandler={doubleDown}>Double down</Button>
      <Button clickHandler={handleReset}>Reset Game</Button>
      <h1>Your wallet: {userWallet}</h1>
      <h1>Your stake: {stake}</h1>
      <h1>Your points: {userSum}</h1>
    </UtilsWrapper>
  );
};

const GameWrapper = styled.main`
  height: 100vh;
  display: grid;
  grid-template-columns: 3fr 3fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  margin-left: 30px;
`;

const UtilsWrapper = styled.section`
  grid-column: 3/4;
  grid-row: 1/3;
  display: grid;
  grid-gap: 30px;
`;
export default Game;
