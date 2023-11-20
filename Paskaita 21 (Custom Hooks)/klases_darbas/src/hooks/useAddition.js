import { useEffect, useState } from "react";

export function useAddition(x, y) {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const result = x + y;

    setSum(result);
  }, [x, y]);

  return sum;
}
