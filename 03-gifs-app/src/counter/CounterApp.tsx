import { useCounter } from "./hooks/useCounter";

export const CounterApp = () => {
  const {
    counter,
    handleAdd,
    handleSubstract,
    handleReset
  } = useCounter(20);  

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1>
        Counter: {counter}
      </h1>

      <div
        style={{
          display: 'flex',
          gap: 6,
          marginTop: 10
        }}
      >
        <button onClick={handleAdd}>
          +1
        </button>
        <button onClick={handleSubstract}>
          -1
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};
