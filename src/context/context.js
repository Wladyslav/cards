import React, { useState, useEffect } from "react";
import axios from "axios";
import Airtable from "airtable";

const CardsAppContext = React.createContext();
const base = new Airtable({ apiKey: "keyYS6AR84VukXYC1" }).base(
  "appW9xjiNP5ipw3wJ"
);
//provider
//consumer
const CardsAppProvider = ({ children }) => {
  const [deck, setDeck] = useState([]);
  const [userCards, setUserCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);

  useEffect(() => {
    const fetchDeck = async () => {
      await axios
        .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
        .then((res) => {
          setDeck(res.data);
        })
        .catch((err) => console.log(err));
    };
    base("card-game")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        console.log(records);
        fetchNextPage();
      });

    fetchDeck();
  }, []);

  const getUserCards = async () => {
    await axios
      .get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`)
      .then((res) => {
        setUserCards([...userCards, { card: res.data }]);
      })
      .catch((err) => console.log(err));
  };

  const getDealerCards = async () => {
    await axios
      .get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=2`)
      .then((res) => {
        setDealerCards([...dealerCards, { card: res.data }]);
      })
      .catch((err) => console.log(err));
  };

  const createRecord = async () => {
    base("card-game").create([
      {
        fields: {
          points: "333",
          valet: "333",
          userName: "lol",
        },
      },
    ]);
  };

  return (
    <CardsAppContext.Provider
      value={{
        deck,
        userCards,
        getUserCards,
        dealerCards,
        getDealerCards,
        createRecord,
      }}
    >
      {children}
    </CardsAppContext.Provider>
  );
};
export { CardsAppContext, CardsAppProvider };
