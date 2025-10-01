import { useState } from 'react';

import './ItemCounter.css';

interface Props {
  article: string;
  quantity?: number;
}

export const ItemCounter = ({ article, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubstract = () => {
    if (count === 1) return;

    setCount(count - 1);
  };

  return (
    <>
      <article className='item-row'>
        <p
          className='item-title'
          style={{
            color: count === 1 ? 'red' : 'black',
          }}
        >
          { article }
        </p>

        <button onClick={handleSubstract}>
          -1
        </button>

        <span>
          { count }
        </span>

        <button onClick={handleAdd}>
          +1
        </button>
      </article>
    </>
  );
};
