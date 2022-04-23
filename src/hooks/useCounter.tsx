import { useState } from 'react';

interface ReturnTypes {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

export const useCounter = (
  initialValue: number = 0,
  step: number = 1,
): ReturnTypes => {
  const [counter, setCounter] = useState<number>(initialValue);
  const increment = () => {
    setCounter((counter: number) => counter + step);
  };
  const decrement = () => {
    setCounter((counter: number) => counter - step);
  };
  return { counter, increment, decrement };
};
