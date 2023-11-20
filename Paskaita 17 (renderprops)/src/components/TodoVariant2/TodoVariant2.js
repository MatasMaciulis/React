import React from "react";

export default function TodoVariant2({ data }) {
  return (
    <div>
      <h5>{data.title}</h5>
      <h6>{data.completed ? "Baigtas" : "Nebaigtas"}</h6>
    </div>
  );
}
