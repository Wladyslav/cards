import React, { useContext, useState, useEffect } from "react";
import { CardsAppContext } from "../context/context";
import styled from "styled-components";
import Button from "./Button";

const Dealer = () => {
  const { deck, dealerCards, getDealerCards } = useContext(CardsAppContext);
  const [userPoinst, setUserPoints] = useState("");
  const [currentValue, setCurrentValue] = useState([]);

  // const calculateUserPoints = (points) => {
  //   console.log(points);
  // };

  return (
    <DealerWrapper>
      <Button func={getDealerCards} children={"dealer"} />
      <div>
        {dealerCards.map((card) => {
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
    </DealerWrapper>
  );
};

const DealerWrapper = styled.section`
  height: 50vh;
  border: 2px black solid;
  div {
    display: flex;
  }
`;

export default Dealer;
