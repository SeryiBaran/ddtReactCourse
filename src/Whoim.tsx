import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Whoim.css";

function Whoim() {
  let WhoimButtonClicked = false;
  const WhoimButton = (
    <button
      onClick={function () {
        WhoimButtonClick();
      }}
    >
      Открыть мое имя
    </button>
  );
  const WhoimName = "умный пельмешек";
  const WhoimTextP = <WhoimTextPGen name={WhoimName} />;
  function WhoimTextPGen(props: any) {
    return <p>Я {props.name}!</p>;
  }
  function WhoimButtonClick() {
    if (WhoimButtonClicked) {
      WhoimButtonClicked = false;
    } else {
      WhoimButtonClicked = true;
    }
    WhoimButtonCheckClicked();
  }
  const WhoimButtonClickedText = (
    <div>
      <p>Я создал этот сайт, и кто я такой?</p>
      {WhoimButton}
      {WhoimTextP}
    </div>
  );
  const WhoimButtonNoClickedText = (
    <div>
      <p>Я создал этот сайт, и кто я такой?</p>
      {WhoimButton}
    </div>
  );
  function WhoimButtonCheckClicked() {
    if (WhoimButtonClicked) {
      ReactDOM.render(
        <React.StrictMode>{WhoimButtonClickedText}</React.StrictMode>,
        document.getElementById("whoimContainer")
      );
    } else {
      ReactDOM.render(
        <React.StrictMode>{WhoimButtonNoClickedText}</React.StrictMode>,
        document.getElementById("whoimContainer")
      );
    }
  }
  ReactDOM.render(
    <React.StrictMode>{WhoimButtonNoClickedText}</React.StrictMode>,
    document.getElementById("whoimContainer")
  );
}

export default Whoim;
