import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import Clock from "./Clock";
import Whoim from "./Whoim";

Clock();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
ReactDOM.render(
  <React.StrictMode>
    <Whoim />
  </React.StrictMode>,
  document.getElementById("buttonWhoimContainer")
);
