import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./EffectTest.css";

function EffectTest() {
  const [count, setCount] = useState(0);
  const countParagraph = document.getElementById("countParagraph");
  let countParagraphText = `Вы нажали на кнопочку ${count} раз`;
  useEffect(function(){
    countParagraphText = `Вы нажали на кнопочку ${count} раз`;
  });
  return (
    <div>
      <button onClick={function(){setCount(count + 1)}}>
        Нажми меня
      </button>
      <p id="countParagraph">{countParagraphText}</p>
    </div>
  );
}

export default EffectTest;
