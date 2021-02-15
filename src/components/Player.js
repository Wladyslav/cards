import React, { useContext, useState, useEffect } from "react";
import { CardsAppContext } from "../context/context";
import styled from "styled-components";
import Button from "./Button";

const Player = () => {
  const { deck, userCards, getUserCards, createRecord } = useContext(
    CardsAppContext
  );
  const [userPoinst, setUserPoints] = useState("");
  const [currentValue, setCurrentValue] = useState([]);

  // const calculateUserPoints = (points) => {
  //   console.log(points);
  // };

  return (
    <PlayerWrapper>
      <Button func={getUserCards} children={"Get player card"} />
      <button onClick={createRecord}>asd</button>
      <div>
        {userCards.map((card) => {
          return card.card.cards.map((singleCard) => {
            return (
              <div key={singleCard.code}>
                <p>{singleCard.value}</p>
                {/* {calculateUserPoints(singleCard.value)} */}
                <img src={singleCard.image} alt="card" />
              </div>
            );
          });
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
