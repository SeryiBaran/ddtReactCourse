import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./components/App/App";
import Clock from "./components/Clock/Clock";
import Whoim from "./components/Whoim/Whoim";
import EffectTest from "./components/EffectTest/EffectTest";
import StateTest from "./components/StateTest/StateTest";
import Indent from "./components/Indent/Indent";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Indent />
    <Clock />
    <Indent />
    <Whoim />
    <Indent />
    <EffectTest />
    <Indent />
    <StateTest />
  </React.StrictMode>,
  document.getElementById("root")
);