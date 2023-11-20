import React, { use } from "react";
import { useWindowMeasurements } from "../../hooks/useWindowMeasurements";

export default function Measurements() {
  const { height, width } = useWindowMeasurements();

  return (
    <div>
      <p>Height: {height}</p>
      <p>width: {width}</p>
    </div>
  );
}
