import React, { useState, useEffect } from "react";
import "./EffectTest.css";

function EffectTest() {
  const [count, setCount] = useState(0);

  // Я знаю, что наверняка можно было сделать проще, но я хотел хоть куда-нибудь всунуть useEffect
  let paragraphCountText = `Вы нажали на кнопочку ${count} раз`;

  const onButtonClick = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    paragraphCountText = `Вы нажали на кнопочку ${count} раз`;
  });

  return (
    <div id="effectTest">
      <button onClick={onButtonClick}>Нажми меня</button>
      <p>{paragraphCountText}</p>
    </div>
  );
}

export default EffectTest;
