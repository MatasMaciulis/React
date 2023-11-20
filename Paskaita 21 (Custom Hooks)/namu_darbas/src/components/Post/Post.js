import React from "react";

export default function Post({ title, body }) {
  return (
    <div>
      <h5>{title}</h5>
      <p>{body}</p>
    </div>
  );
}
