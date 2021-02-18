import React, { useContext } from "react";
import { CardsAppContext } from "../context/context";
import styled from "styled-components";

const Dealer = () => {
  const { dealerCards } = useContext(CardsAppContext);

  return (
    <DealerWrapper>
      <DealerCards dealerCards={dealerCards} />
    </DealerWrapper>
  );
};

const DealerCards = ({ dealerCards }) => (
  <>
    {dealerCards.map((card) => {
      const {
        card: { cards: dealerCards },
      } = card;
      return dealerCards.map((singleCard) => {
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

const DealerWrapper = styled.section`
  grid-column: 1/3;
  grid-row: 1/2;
  display: flex;
`;

export default Dealer;
