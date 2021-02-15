import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { CardsAppProvider } from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <CardsAppProvider>
      <App />
    </CardsAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
