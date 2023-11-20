
import React from 'react';

export default function TodoItem({ todolist, onDelete }) {
  return (
    <div>
      <h2>To Do This : {todolist}</h2>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

