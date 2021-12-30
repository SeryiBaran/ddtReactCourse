import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import Clock from "./Clock";

Clock();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
