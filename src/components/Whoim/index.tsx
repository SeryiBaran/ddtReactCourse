import { useState } from 'react';

const whoimText = <p>Я чокнутый линуксоид! 🤪</p>;

export const Whoim = () => {
  const [isShown, setIsShown] = useState<boolean>(false);

  const handleClickButton = () => {
    setIsShown(isShown => !isShown);
  };

  return (
    <div>
      <button onClick={handleClickButton}>
        {isShown ? 'Закрыть' : 'Открыть'} мое имя
      </button>
      {isShown && whoimText}
    </div>
  );
};
