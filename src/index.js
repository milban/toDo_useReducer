import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ToDosProvider from "./context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ToDosProvider>
    <App />
  </ToDosProvider>,
  rootElement
);
