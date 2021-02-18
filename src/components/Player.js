import React, { useContext } from "react";
import { CardsAppContext } from "../context/context";
import styled from "styled-components";

const Player = () => {
  const { userCards } = useContext(CardsAppContext);

  return (
    <PlayerWrapper>
      <PlayerCards userCards={userCards} />
    </PlayerWrapper>
  );
};

const PlayerCards = ({ userCards }) => (
  <>
    {userCards.map((card) => {
      const {
        card: { cards: playerCards },
      } = card;
      return playerCards.map((singleCard) => {
        const { code, image } = singleCard;
        return (
          <div key={code}>
            <img src={image} alt="card" />
          </div>
        );
      });
    })}
  </>
);

const PlayerWrapper = styled.section`
  grid-column: 1/3;
  grid-row: 2/3;
  display: flex;
`;

export default Player;
