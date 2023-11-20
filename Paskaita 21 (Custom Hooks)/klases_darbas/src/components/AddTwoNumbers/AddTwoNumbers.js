import React, { useState } from "react";
import { useAddition } from "../../hooks/useAddition";

export default function AddTwoNumbers() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  const sum = useAddition(+firstNumber, +secondNumber);

  const sum2 = useAddition(10, 20);

  return (
    <div>
      <input type="number" value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)} />
      <br />
      <input type="number" value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)} />
      <h1>{sum}</h1>
      <h2>{sum2}</h2>
    </div>
  );
}
