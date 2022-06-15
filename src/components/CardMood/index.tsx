import { FC, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

const cardMoodInputLimit = 30;

interface IStyledCardMood {
  active?: boolean;
  valid?: boolean;
}

interface IButton {
  active?: boolean;
  valid?: boolean;
}

const StyledCardMood = styled.div.attrs(() => ({}))<IStyledCardMood>`
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
  ${props =>
    props.active &&
    css`
      transform: scale(1.1);
      box-shadow: 0 0 1.5em 0.8em rgb(0 0 0 / 20%);
    `}
  ${props =>
    !props.valid &&
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

const Button = styled.button.attrs(() => ({}))<IButton>`
  min-width: 2em;
  border-radius: inherit;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  outline: none;
  background-color: rgb(216 225 255);
  color: #1343aa;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  transition-property: background-color, background-image;
  :hover {
    opacity: 0.8;
  }
  ::before {
    font-size: 1.4em;
  }
  ${props =>
    props.active &&
    css`
      background-color: rgb(199 255 206);
      color: #0c7a00;
    `}
  ${props =>
    !props.valid &&
    css`
      background-color: rgb(255 199 199);
      color: #b80000;
      cursor: not-allowed;
      :hover {
        opacity: 1;
      }
    `}
`;

export const CardMood: FC = () => {
  const [activeInput, setActiveInput] = useState<boolean>(false);
  const [validInput, setValidInput] = useState<boolean>(true);
  const [mood, setMood] = useState<string>('Напыжился');

  const input = useRef<HTMLInputElement | null>(null);

  function toogleActiveAndApply() {
    if (validInput && input.current) {
      setMood(input.current.value);
      setActiveInput(activeInput => !activeInput);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (
      activeInput &&
      validInput &&
      (e.code == 'Enter' || e.keyCode === 13 || e.code == 'NumpadEnter')
    ) {
      e.preventDefault();
      toogleActiveAndApply();
    }
  }

  function handleKeyInput(e: React.KeyboardEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;

    if (target.value.length > cardMoodInputLimit) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  }

  return (
    <StyledCardMood
      onKeyDown={handleKeyDown}
      data-tooltip={`Нельзя вводить более ${cardMoodInputLimit} символов!`}
      {...{ valid: validInput }}
      {...{ active: activeInput }}
    >
      <Input
        type="text"
        defaultValue={mood}
        {...(!activeInput && { readOnly: true })}
        onKeyDown={handleKeyInput}
        onKeyUp={handleKeyInput}
        ref={input}
      />
      <Button
        className={[
          activeInput && 'fa-solid fa-circle-check',
          !activeInput && 'fa-solid fa-pencil',
          !validInput && 'fa-solid fa-circle-exclamation',
        ]
          .filter(e => !!e)
          .join(' ')}
        {...(activeInput ? { title: 'Применить' } : { title: 'Редактировать' })}
        onClick={toogleActiveAndApply}
        {...{ valid: validInput }}
        {...{ active: activeInput }}
      />
    </StyledCardMood>
  );
};
