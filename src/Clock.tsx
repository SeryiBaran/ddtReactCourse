import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Clock.css";

function Clock() {
  let clockElem = (
    <h2 className="Clock">Время: {new Date().toLocaleTimeString()}.</h2>
  );
  ReactDOM.render(clockElem, document.getElementById("clock"));
  function tick() {
    clockElem = (
      <h2 className="Clock">Время: {new Date().toLocaleTimeString()}.</h2>
    );
    ReactDOM.render(clockElem, document.getElementById("clock"));
  }
  setInterval(tick, 1000);
}

export default Clock;
