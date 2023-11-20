import React, { useState } from "react";

export default function Counter({ startingNumber = 0 }) {
  if (startingNumber === null) {
    startingNumber = 0;
  }

  const [counter, setCounter] = useState(startingNumber);

  function incrementHandler() {
    setCounter((prev) => prev + 1);
  }

  function decrementHandler() {
    setCounter((prev) => prev - 1);
  }

  function resetHandler() {
    setCounter(startingNumber);
  }

  return (
    <div>
      <h1 data-testid="counterText">{counter}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}
