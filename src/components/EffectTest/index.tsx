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
      {count >= 50 && count < 100 && (
        <p>
          Вы, царь батюшка,{' '}
          <span title="BASE64 encoded">0LTRg9GA0L7Rh9C+0LM=</span>?
        </p>
      )}
      {count >= 100 && count < 150 && <p>Новый рекорд!</p>}
      {count >= 150 && <p>Новый новый рекорд!</p>}
    </>
  );
};
