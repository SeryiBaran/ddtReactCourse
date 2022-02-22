import React, { useState, useRef } from 'react';

import './CardMood.css';

function CardMood() {
  const cardMoodInputLimit = 30;

  const [activeInput, setActiveInput] = useState(false);
  const [validInput, setValidInput] = useState(true);
  const [mood, setMood] = useState('Напыжился');

  const cardMood = useRef<any>(null);
  const cardMoodInput  = useRef<any>(null);

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
      (e.code == 'Enter' ||
        e.keyCode === 13 ||
        e.code == 'NumpadEnter'
      )
    ) {
      e.preventDefault();
      toogleAndApplyCardMood();
    }
  }

  function onKeyDownCardMoodInput(e: any) {
    if (e.target.value.length > cardMoodInputLimit) {
      setValidInput(validInput => false);
    } else {
      setValidInput(validInput => true);
    }
  }

  return (
    <div
      className={[
        'cardMood',
        activeInput && 'activeCardMood',
        !validInput && 'notValid',
      ]
        .filter(e => !!e)
        .join(' ')}
      onKeyDown={e => onKeyDownCardMood(e)}
      ref={cardMood}
    >
      <input
        type="text"
        defaultValue={mood}
        className="cardMoodInput"
        {...(!activeInput && { readOnly: true })}
        onKeyDown={e => onKeyDownCardMoodInput(e)}
        onKeyUp={e => onKeyDownCardMoodInput(e)}
        ref={cardMoodInput}
      />
      <button
        className={['cardMoodButton', activeInput && 'activeCardMoodButton']
          .filter(e => !!e)
          .join(' ')}
        {...(activeInput ? { title: 'Применить' } : { title: 'Редактировать' })}
        onClick={toogleAndApplyCardMood}
      />
    </div>
  );
}

export default CardMood;
