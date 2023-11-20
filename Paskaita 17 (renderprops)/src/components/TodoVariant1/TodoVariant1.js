import React from "react";

export default function TodoVariant1({ data }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}
