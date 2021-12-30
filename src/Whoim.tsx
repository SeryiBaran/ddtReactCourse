import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Whoim.css";

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
}

function WhoimButtonCheckClicked() {
  if (WhoimButtonClicked) {
    return (
      <div>
        <p>Я создал этот сайт, и кто я такой?</p>
        {WhoimButton}
        {WhoimTextP}
      </div>
    );
  } else {
    return (
      <div>
        <p>Я создал этот сайт, и кто я такой?</p>
        {WhoimButton}
      </div>
    );
  }
}

function Whoim() {
  return <WhoimButtonCheckClicked />;
}

export default Whoim;
