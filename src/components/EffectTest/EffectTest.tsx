import React, { useState, useEffect } from 'react';

const EffectTest: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  let paragraphCountText = `Вы нажали на кнопочку ${count} раз`;

  const onButtonClick = () => {
    setCount(count => count + 1);
  };

  // Я знаю, что можно было сделать проще, но я хотел хоть куда-нибудь всунуть useEffect
  useEffect(() => {
    paragraphCountText = `Вы нажали на кнопочку ${count} раз`;
  });

  return (
    <div>
      <button onClick={onButtonClick}>Нажми меня</button>
      <p>{paragraphCountText}</p>
    </div>
  );
};

export default EffectTest;
