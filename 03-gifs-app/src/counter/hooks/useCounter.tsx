import { useState } from 'react';

export const useCounter = (initialNumber: number = 0) => {
  const [counter, setCounter] = useState(initialNumber);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(initialNumber);
  };

  return {
    counter,
    handleAdd,
    handleSubstract,
    handleReset
  };
};
