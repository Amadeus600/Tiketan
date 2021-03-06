import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { AppContextProvider } from "./contexts/AppContext";

ReactDOM.render(
  <AppContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
