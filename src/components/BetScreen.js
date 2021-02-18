import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { CardsAppContext } from "../context/context";

const BetScreen = () => {
  const {
    handleStake,
    getUserCards,
    stake,
    handleBetStatus,
    handleReset,
    userWallet,
    roundNumber,
  } = useContext(CardsAppContext);

  const onClickCombiner = () => {
    getUserCards();
    handleBetStatus();
  };

  return (
    <BetScreenWrapper>
      <h1>Round: {roundNumber}</h1>
      <div>
        <Button clickHandler={() => handleStake(50)}>--50--</Button>
        <Button clickHandler={() => handleStake(100)}>--100--</Button>
        <Button clickHandler={() => handleStake(500)}>--500--</Button>
        <Button clickHandler={() => handleStake(1000)}>--1000--</Button>
      </div>
      <div>
        <Button clickHandler={onClickCombiner}>Deal</Button>
        <Button clickHandler={handleReset}>Reset Game</Button>
      </div>

      <h1>Your stake: {stake}</h1>
      <h1>Your wallet: {userWallet}</h1>
    </BetScreenWrapper>
  );
};

const BetScreenWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  button {
    margin: 10px;
  }
`;

export default BetScreen;
