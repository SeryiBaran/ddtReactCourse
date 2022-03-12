import React, { useState, useRef } from 'react';

import styles from './CardMood.module.css';

const cardMoodInputLimit = 30;

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
    <div
      className={[
        styles['card-mood'],
        activeInput && styles['active-card-mood'],
        !validInput && styles['not-valid'],
      ]
        .filter(e => !!e)
        .join(' ')}
      onKeyDown={e => onKeyDownCardMood(e)}
      data-tooltip={`Нельзя вводить более ${cardMoodInputLimit} символов!`}
    >
      <input
        type="text"
        defaultValue={mood}
        className={styles['card-mood-input']}
        {...(!activeInput && { readOnly: true })}
        onKeyDown={e => onKeyDownCardMoodInput(e)}
        onKeyUp={e => onKeyDownCardMoodInput(e)}
        ref={cardMoodInput}
      />
      <button
        className={[
          styles['card-mood-button'],
          activeInput && styles['active-card-mood-button'],
        ]
          .filter(e => !!e)
          .join(' ')}
        {...(activeInput ? { title: 'Применить' } : { title: 'Редактировать' })}
        onClick={toogleAndApplyCardMood}
      />
    </div>
  );
};

export default CardMood;
