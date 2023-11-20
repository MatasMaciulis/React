import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { addTodoAsync, deleteTodoAsync, updateTodoAsync } from "../../redux/todos/todosSlice";
import { useDispatch } from "react-redux";

export default function Todos() {
  const [input, setInput] = useState("");
  const [showFinished, setShowFinished] = useState(false);

  const todos = useSelector((state) => state.todos.todos);

  const filteredTodos = useMemo(
    () => todos.filter((todo) => todo.completed === showFinished),
    [showFinished, todos]
  );

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      addTodoAsync({
        title: input,
      })
    );
    setInput("");
  }

  function handleDelete(id) {
    dispatch(deleteTodoAsync(id));
  }

  function handleChange(id, completed) {
    dispatch(updateTodoAsync({ id, completed }));
  }

  return (
    <div>
      <h3>Todos</h3>
      <button onClick={() => setShowFinished((prev) => !prev)}>
        {showFinished ? "baigti" : "nebaigti"}
      </button>
      <br />
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClick}>Add</button>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              onChange={(e) => handleChange(todo.id, e.target.checked)}
              type="checkbox"
              checked={todo.completed}
            />
            {todo.title}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
