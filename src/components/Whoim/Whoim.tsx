import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Whoim.css";

function Whoim() {
  const [isShowed, isShowedSet] = useState(false);
  const [buttonIsClicked, buttonIsClickedSet] = useState(false);
  const WhoimButtonNoClicked = (
    <button
      onClick={function () {
        WhoimButtonClick();
      }}
    >
      Открыть мое имя
    </button>
  );
  const WhoimButtonClicked = (
    <button
      onClick={function () {
        WhoimButtonClick();
      }}
    >
      Закрыть мое имя
    </button>
  );
  const WhoimName = "умный пельмешек";
  const WhoimTextP = <WhoimTextPGen name={WhoimName} />;
  function WhoimTextPGen(props: any) {
    return <p>Я {props.name}!</p>;
  }
  function WhoimButtonClick() {
    isShowedSet(!isShowed);
    buttonIsClickedSet(!buttonIsClicked);
  }
  return (
    <div>
      {buttonIsClicked && WhoimButtonClicked}
      {!buttonIsClicked && WhoimButtonNoClicked}
      {isShowed && WhoimTextP}
    </div>
  );
}

export default Whoim;
