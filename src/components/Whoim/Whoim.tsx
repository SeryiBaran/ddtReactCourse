import React, { useState } from 'react';
import './Whoim.css';

const whoimText = <p>Я чокнутый линуксоид! 🤪</p>;

function Whoim() {
  const [whoimIsShown, setWhoimIsShown] = useState(false);

  function clickWhoimButton() {
    setWhoimIsShown(whoimIsShown => !whoimIsShown);
  }

  return (
    <div id="whoimContainer">
      <button onClick={clickWhoimButton}>
        {whoimIsShown ? 'Закрыть' : 'Открыть'} мое имя
      </button>
      {whoimIsShown && whoimText}
    </div>
  );
}

export default Whoim;
