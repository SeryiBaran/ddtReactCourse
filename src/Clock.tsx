import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Clock.css";

function Clock() {
  const [countDate, setCountDate] = useState(new Date());
  let timerID = setInterval(function(){tick(), 1000});
  function tick() {
    setCountDate(new Date());
  }
  return (
    <div>
      <h2 className="Clock">Время: {countDate.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
