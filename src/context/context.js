import React, { useEffect, useState } from "react";
import axios from "axios";
import useLocalStorage from "../storage/useLocalStorage";

const CardsAppContext = React.createContext();

//provider
//consumer
const CardsAppProvider = ({ children }) => {
  //State
  const [deck, setDeck] = useLocalStorage("deck", []);
  const [gameStatus, setGameStatus] = useLocalStorage("gameStatus", false);
  const [betStatus, setBetStatus] = useState(false);
  const [roundWon, setRoundWon] = useState(false);
  const [highScore, setHighScore] = useLocalStorage("highScore", 0);
  const [roundNumber, setRoundNumber] = useLocalStorage("roundNumber", 1);
  const [gameResultScreen, setGemeResultScreen] = useState(false);

  //Player state

  const [userWallet, setUserWallet] = useLocalStorage("userWallet", 1000);
  const [userCards, setUserCards] = useState([]);
  const [userPoints, setUserPoints] = useState([]);
  const [userSum, setUserSum] = useState(0);
  const [stake, setStake] = useState(0);

  // Dealer state
  const [dealerCards, setDealerCards] = useState([]);
  const [dealerSum, setDealerSum] = useState(0);
  const [dealerPoints, setDealerPoints] = useState([]);

  //actions

  const handleReset = () => {
    setDeck([]);
    setGameStatus(false);
    setRoundWon(false);
    setBetStatus(false);
    setUserCards([]);
    setDealerCards([]);
    setUserPoints([]);
    setUserSum(0);
    setDealerSum(0);
    setDealerPoints([]);
    setUserWallet(1000);
    window.localStorage.removeItem(
      "userWallet",
      "roundNumber",
      "gameStatus",
      "deck"
    );
    fetchDeck();
    setRoundNumber(1);
  };

  const handleNextRound = () => {
    fetchDeck();
    setRoundWon(false);
    setBetStatus(false);
    setUserCards([]);
    setDealerCards([]);
    setUserPoints([]);
    setUserSum(0);
    setDealerSum(0);
    setStake(0);
    setDealerPoints([]);
    setGemeResultScreen(!gameResultScreen);
    setRoundNumber(roundNumber + 1);
    if (roundNumber === 5 && userWallet > highScore) {
      setHighScore(userWallet);
    }
    if (roundNumber === 5) {
      handleReset();
    }
    if (userWallet < 50) {
      handleReset();
    }
  };

  const handleGameStatus = () => {
    setGameStatus(!gameStatus);
  };
  const handleBetStatus = () => {
    if (stake > 0) {
      setBetStatus(!betStatus);
    }
  };
  const handleStake = (value) => {
    if (stake < userWallet) setStake(stake + value);
  };

  const handleStand = () => {
    if (userPoints.length > 1 && userSum >= dealerSum && userSum <= 21) {
      setUserWallet(userWallet + stake * 1.5);
      setGemeResultScreen(!gameResultScreen);
      setRoundWon(!roundWon);
    }
    if (userPoints.length > 1 && userSum < dealerSum) {
      setUserWallet(userWallet - stake);
      setGemeResultScreen(!gameResultScreen);
    }
  };

  const doubleDown = () => {
    if (userPoints.length <= 2) {
      setStake(stake * 2);
      getUserCards();
    }
  };

  const fetchDeck = async () => {
    await axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
      .then((res) => {
        setDeck(res.data);
      })
      .catch((err) => console.log(err));
  };

  //user actions
  const getUserCards = async () => {
    if (stake > 0) {
      await axios
        .get(
          `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
        )
        .then((res) => {
          setUserCards([...userCards, { card: res.data }]);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    userCards.forEach((el) => {
      const arr = [...userPoints];
      const defVal = "10";

      if (
        el.card.cards[0].value === "JACK" ||
        el.card.cards[0].value === "QUEEN" ||
        el.card.cards[0].value === "KING"
      ) {
        arr.push(defVal);
      } else if (el.card.cards[0].value === "ACE") {
        arr.push(defVal);
      } else {
        arr.push(el.card.cards[0].value);
      }

      setUserPoints(arr);
    });
  }, [userCards]);

  useEffect(() => {
    userPoints.forEach((el) => {
      setUserSum(userSum + parseInt(el));
    });
  }, [userPoints]);

  useEffect(() => {
    if (dealerSum > 21 && userSum < 21) {
      setUserWallet(userWallet + stake * 1.5);
      setGemeResultScreen(!gameResultScreen);
      setRoundWon(!roundWon);
    }
  }, [dealerSum]);
  useEffect(() => {
    if (userSum > 21 && dealerSum < 21) {
      setUserWallet(userWallet - stake);
      setGemeResultScreen(!gameResultScreen);
    }
  }, [userSum]);

  //dealerActions

  const getDealerCards = async () => {
    if (stake > 0) {
      await axios
        .get(
          `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
        )
        .then((res) => {
          setDealerCards([...dealerCards, { card: res.data }]);
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    if (dealerPoints.length < 2) {
      getDealerCards();
    }
    if (
      dealerPoints.length > 2 &&
      dealerSum !== 21 &&
      dealerSum !== 20 &&
      Math.random < 0.5
    ) {
      getDealerCards();
    }
  }, [userSum]);

  useEffect(() => {
    dealerCards.forEach((el) => {
      const arr = [...dealerPoints];
      const defVal = "10";

      if (
        el.card.cards[0].value === "JACK" ||
        el.card.cards[0].value === "QUEEN" ||
        el.card.cards[0].value === "KING"
      ) {
        arr.push(defVal);
      } else if (el.card.cards[0].value === "ACE") {
        arr.push(defVal);
      } else {
        arr.push(el.card.cards[0].value);
      }

      setDealerPoints(arr);
    });
  }, [dealerCards]);

  useEffect(() => {
    dealerPoints.forEach((el) => {
      setDealerSum(dealerSum + parseInt(el));
    });
  }, [dealerPoints]);
  return (
    <CardsAppContext.Provider
      value={{
        deck,
        userCards,
        getUserCards,
        dealerCards,
        getDealerCards,
        gameStatus,
        handleGameStatus,
        handleReset,
        userWallet,
        handleStake,
        stake,
        fetchDeck,
        betStatus,
        handleBetStatus,
        handleStand,
        doubleDown,
        gameResultScreen,
        userSum,
        roundWon,
        dealerSum,
        handleNextRound,
        roundNumber,
        highScore,
      }}
    >
      {children}
    </CardsAppContext.Provider>
  );
};
export { CardsAppContext, CardsAppProvider };
