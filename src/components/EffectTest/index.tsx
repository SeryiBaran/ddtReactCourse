import { FC, useState, useEffect } from 'react';

export const EffectTest: FC = () => {
  const [count, setCount] = useState<number>(0);

  let paragraphCountText = `Вы нажали на кнопочку ${count} раз`;

  const handleButtonClick = () => {
    setCount(count => count + 1);
  };

  // Я знаю, что можно было сделать проще, но я хотел хоть куда-нибудь всунуть useEffect
  useEffect(() => {
    paragraphCountText = `Вы нажали на кнопочку ${count} раз`;
  });

  return (
    <>
      <button onClick={handleButtonClick}>Нажми меня</button>
      <p>{paragraphCountText}</p>
    </>
  );
};
