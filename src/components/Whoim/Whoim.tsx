import React, { useState } from 'react';

const whoimText = <p>Я чокнутый линуксоид! 🤪</p>;

export const Whoim: React.FC = () => {
  const [whoimIsShown, setWhoimIsShown] = useState<boolean>(false);

  function clickWhoimButton() {
    setWhoimIsShown(whoimIsShown => !whoimIsShown);
  }

  return (
    <div>
      <button onClick={clickWhoimButton}>
        {whoimIsShown ? 'Закрыть' : 'Открыть'} мое имя
      </button>
      {whoimIsShown && whoimText}
    </div>
  );
};
