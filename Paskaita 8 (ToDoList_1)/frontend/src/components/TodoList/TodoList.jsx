import React, { useEffect, useState } from "react";

// Axios leidžia atlikti HTTP užklausas į nuotolinį serverį.
import axios from "axios";

import TodoItem from "../TodoItem/TodoItem";
import CreateTodo from "../CreateTodo/CreateTodo";
import "./TodoList.css";

const ENDPOINT = "http://localhost:4000/todos";

export default function TodoList() {
  const [list, setGetTodoList] = useState([]);

  useEffect(() => {
    axios
      .get(ENDPOINT)
      .then(({ data }) => setGetTodoList(data))
      .catch((error) => console.error(error));
  }, []);

  function handleTodoAdded(newTodo) {
    setGetTodoList((prev) => [newTodo, ...prev]);
  }

  // Funkcija, kuri ištrins užduotį pagal jos ID
  function handleTodoDelete(id) {
    axios
      .delete(`${ENDPOINT}/${id}`)
      .then(() => {
        // Ištriname užduotį iš sąrašo
        setGetTodoList((prev) => prev.filter((item) => item._id !== id));
      })
      .catch((error) => console.error(error));
  }

 return (
    <div className="todo-list"> {/* Pritaikome stilių pagal klases */}
      <CreateTodo onTodoAdded={handleTodoAdded} />
      {list.map((item) => (
        <div className="todo-item"> {/* Pritaikome stilių pagal klases */}
          <TodoItem
            key={item._id}
            todolist={item.todolist}
            onDelete={() => handleTodoDelete(item._id)}
          />
        </div>
      ))}
    </div>
  );
}


