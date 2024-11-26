import React from "react";
import ReactDOM from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faLightbulb,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

import { ResultContextProvider } from "./contexts/ResultContextProvider";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

library.add(faMagnifyingGlass, faLightbulb, faMoon);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
