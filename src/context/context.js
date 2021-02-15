import React, { useState, useEffect } from "react";
import axios from "axios";

const CardsAppContext = React.createContext();

//provider
//consumer
const CardsAppProvider = ({ children }) => {
  const [deck, setDeck] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchDeck = async () => {
      await axios
        .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
        .then((res) => {
          setDeck(res.data);
        })
        .catch((err) => console.log(err));
    };

    fetchDeck();
  }, []);
  const getCards = async () => {
    await axios
      .get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`)
      .then((res) => {
        setCards([...cards, { card: res.data }]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CardsAppContext.Provider value={{ deck, cards, getCards }}>
      {children}
    </CardsAppContext.Provider>
  );
};
export { CardsAppContext, CardsAppProvider };
