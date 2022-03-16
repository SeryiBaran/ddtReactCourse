import React, { useState, useRef } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

library.add(fas);

const cardMoodInputLimit = 30;

const CardMoodDiv = styled.div`
  display: flex;
  border: solid 0.1em #cdcdcd;
  border-radius: 0.5em;
  transition: all 150ms ease-in-out;
  transition-property: transform, box-shadow;
  ::after {
    position: absolute;
    top: 1em;
    left: 0;
    padding: 0.5em;
    background: #f14747;
    box-shadow: 2px 2px 5px rgb(0 0 0 / 30%);
    content: attr(data-tooltip);
    color: #fff;
    opacity: 0;
    pointer-events: none;
    transition: 150ms;
  }
  ${({ active }: any) =>
    active &&
    css`
      transform: scale(1.1);
      box-shadow: 0 0 1.5em 0.8em rgb(0 0 0 / 20%);
    `}
  ${({ valid }: any) =>
    !valid &&
    css`
      border: solid red 0.1em;
      ::after {
        top: 3em;
        opacity: 1;
      }
    `}
`;

const Input = styled.input`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  padding: 0.5em;
  border-right: solid 0.1em #cdcdcd;
  border-radius: inherit;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  outline: none;
  background-color: transparent;
`;

const Button = styled.button`
  min-width: 2em;
  border-radius: inherit;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  outline: none;
  background-color: rgb(216 225 255);
  color: #1343aa;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  transition-property: background-color;
  :hover {
    opacity: 0.8;
  }
  svg {
    font-size: 1.4em;
  }
  ${({ active }: any) =>
    active &&
    css`
      background-color: rgb(199 255 206);
      color: #0c7a00;
    `}
  ${({ valid }: any) =>
    !valid &&
    css`
      background-color: rgb(255 199 199);
      color: #b80000;
      cursor: not-allowed;
      :hover {
        opacity: 1;
      }
    `}
`;

const CardMood: React.FC = () => {
  const [activeInput, setActiveInput] = useState<boolean>(false);
  const [validInput, setValidInput] = useState<boolean>(true);
  const [mood, setMood] = useState<string>('Напыжился');

  const cardMoodInput = useRef<any>(null);

  function toogleAndApplyCardMood() {
    if (validInput) {
      setMood(cardMoodInput.current.value);
      setActiveInput(activeInput => !activeInput);
    }
  }

  function onKeyDownCardMood(e: any) {
    if (
      activeInput &&
      validInput &&
      (e.code == 'Enter' || e.keyCode === 13 || e.code == 'NumpadEnter')
    ) {
      e.preventDefault();
      toogleAndApplyCardMood();
    }
  }

  function onKeyDownCardMoodInput(e: any) {
    if (e.target.value.length > cardMoodInputLimit) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  }

  return (
    <CardMoodDiv
      onKeyDown={e => onKeyDownCardMood(e)}
      data-tooltip={`Нельзя вводить более ${cardMoodInputLimit} символов!`}
      {...(validInput && { valid: true })}
      {...(activeInput && { active: true })}
    >
      <Input
        type="text"
        defaultValue={mood}
        {...(!activeInput && { readOnly: true })}
        onKeyDown={e => onKeyDownCardMoodInput(e)}
        onKeyUp={e => onKeyDownCardMoodInput(e)}
        ref={cardMoodInput}
      />
      <Button
        {...(activeInput ? { title: 'Применить' } : { title: 'Редактировать' })}
        onClick={toogleAndApplyCardMood}
        {...(validInput && { valid: true })}
        {...(activeInput && { active: true })}
      >
        {!activeInput && <FontAwesomeIcon icon="pencil" />}
        {activeInput && validInput && <FontAwesomeIcon icon="circle-check" />}
        {!validInput && <FontAwesomeIcon icon="circle-exclamation" />}
      </Button>
    </CardMoodDiv>
  );
};

export default CardMood;
