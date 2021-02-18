import React, { useContext } from "react";
import { CardsAppContext } from "./context/context";
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GlobalStyle from "./style/globalStyles";

function App() {
  const { gameStatus } = useContext(CardsAppContext);

  return (
    <div className="App">
      <GlobalStyle />
      {gameStatus ? <Game /> : <StartScreen />}
    </div>
  );
}

export default App;
