import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Clock.css";

function Clock() {
  const [countDate, setCountDate] = useState(new Date());
  let timerID = setInterval(function(){tick(), 1000});
 
  useEffect(function () {
    clearInterval(timerID);
  });
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
