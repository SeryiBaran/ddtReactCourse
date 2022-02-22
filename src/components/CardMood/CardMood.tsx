import React, { useState, useRef } from 'react';

import styles from './CardMood.module.css';

function CardMood() {
  const cardMoodInputLimit = 30;

  const [activeInput, setActiveInput] = useState(false);
  const [validInput, setValidInput] = useState(true);
  const [mood, setMood] = useState('Напыжился');

  const cardMood = useRef<any>(null);
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
      setValidInput(validInput => false);
    } else {
      setValidInput(validInput => true);
    }
  }

  return (
    <div
      className={[
        styles.cardMood,
        activeInput && styles.activeCardMood,
        !validInput && styles.notValid,
      ]
        .filter(e => !!e)
        .join(' ')}
      onKeyDown={e => onKeyDownCardMood(e)}
      ref={cardMood}
      data-tooltip={`Нельзя вводить более ${cardMoodInputLimit} символов!`}
    >
      <input
        type="text"
        defaultValue={mood}
        className={styles.cardMoodInput}
        {...(!activeInput && { readOnly: true })}
        onKeyDown={e => onKeyDownCardMoodInput(e)}
        onKeyUp={e => onKeyDownCardMoodInput(e)}
        ref={cardMoodInput}
      />
      <button
        className={[styles.cardMoodButton, activeInput && styles.activeCardMoodButton]
          .filter(e => !!e)
          .join(' ')}
        {...(activeInput ? { title: 'Применить' } : { title: 'Редактировать' })}
        onClick={toogleAndApplyCardMood}
      />
    </div>
  );
}

export default CardMood;
