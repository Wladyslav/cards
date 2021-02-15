import React, { useContext, useState, useEffect } from "react";
import { CardsAppContext } from "../context/context";
import styled from "styled-components";

const Player = () => {
  const { deck, cards, getCards } = useContext(CardsAppContext);
  const [userPoinst, setUserPoints] = useState("");
  const [currentValue, setCurrentValue] = useState([]);

  // const calculateUserPoints = (points) => {
  //   console.log(points);
  // };

  return (
    <PlayerWrapper>
      <button onClick={getCards}>get</button>
      <div>
        {cards.map((card) => {
          {
            return card.card.cards.map((singleCard) => {
              return (
                <div key={singleCard.code}>
                  <p>{singleCard.value}</p>
                  {/* {calculateUserPoints(singleCard.value)} */}
                  <img src={singleCard.image} alt="card" />
                </div>
              );
            });
          }
        })}
      </div>
    </PlayerWrapper>
  );
};

const PlayerWrapper = styled.section`
  width: 100%;
  div {
    display: flex;
  }
`;

export default Player;
