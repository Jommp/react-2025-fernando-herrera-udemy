import { useCounter } from '@/hooks/useCounter';
import { useMemo } from 'react';

const myHeavyFunction = (iterationValue: number) => {
  console.time('heavy_function');

  for (let index = 0; index < iterationValue; index++) {
    console.log('Lets go!');
  }

  console.timeEnd('heavy_function');

  return `${iterationValue} iteraciones realizadas`;
};

export const MemoCounter = () => {
  const { counter, increment } = useCounter(40_000);
  const { counter: counter2, increment: increment2 } = useCounter(10);

  const heavyValue = useMemo(() => 
    myHeavyFunction(counter),
    [counter]
  );

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className='text-2xl font-bold'>
        Memo - useMemo { heavyValue }
      </h1>
      <hr />

      <h4>
        Counter: { counter }
      </h4>
      <h4>
        Counter 2: { counter2 }
      </h4>

      <button
        className="bg-indigo-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={increment}>
        +1
      </button>

      <button
        className="bg-indigo-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={increment2}>
        Counter2 + 1
      </button>
    </div>
  );
};
