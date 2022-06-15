import { FC, useState } from 'react';

const whoimText = <p>Я чокнутый линуксоид! 🤪</p>;

export const Whoim: FC = () => {
  const [whoimIsShown, setWhoimIsShown] = useState<boolean>(false);

  const handleClickWhoimButton = () => {
    setWhoimIsShown(whoimIsShown => !whoimIsShown);
  };

  return (
    <div>
      <button onClick={handleClickWhoimButton}>
        {whoimIsShown ? 'Закрыть' : 'Открыть'} мое имя
      </button>
      {whoimIsShown && whoimText}
    </div>
  );
};
