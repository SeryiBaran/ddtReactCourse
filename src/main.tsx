import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./components/App/App";
import Clock from "./components/Clock/Clock";
import Whoim from "./components/Whoim/Whoim";
import EffectTest from "./components/EffectTest/EffectTest";
import StateTest from "./components/StateTest/StateTest";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);

ReactDOM.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>,
  document.getElementById("clock")
);

ReactDOM.render(
  <React.StrictMode>
    <Whoim />
  </React.StrictMode>,
  document.getElementById("whoimContainer")
);

ReactDOM.render(
  <React.StrictMode>
    <EffectTest />
  </React.StrictMode>,
  document.getElementById("EffectTest")
);

ReactDOM.render(
  <React.StrictMode>
    <StateTest />
  </React.StrictMode>,
  document.getElementById("StateTest")
);