import React, { useState } from "react";
import "./Whoim.css";

const whoimText = <p>Я чокнутый линуксоид! 🤪</p>;

function Whoim() {
  const [whoimButtonIsClicked, setwhoimButtonIsClicked] = useState(false);

  function clickWhoimButton() {
    setwhoimButtonIsClicked((whoimButtonIsClicked) => !whoimButtonIsClicked);
  }
  
  return (
    <div id="whoimContainer">
      <button onClick={clickWhoimButton}>{whoimButtonIsClicked ? 'Закрыть' : 'Открыть'} мое имя</button>
      {whoimButtonIsClicked && whoimText}
    </div>
  );
}

export default Whoim;
