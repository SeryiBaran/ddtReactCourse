import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import Clock from "./Clock";
import Whoim from "./Whoim";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);

// ПОТРЕБЛЯЕТ ОЧЕНЬ МНОГО ОЗУ!!!!!!!!!!!!!!!!!
// ReactDOM.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>,
//   document.getElementById("clock")
// );

ReactDOM.render(
  <React.StrictMode>
    <Whoim />
  </React.StrictMode>,
  document.getElementById("whoimContainer")
);