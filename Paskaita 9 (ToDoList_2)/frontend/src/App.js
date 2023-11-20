import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import TodoList from "./components/TodoList/TodoList";
import axios from "axios";

const HOST = "http://localhost:3001/todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(HOST)
      .then(({ data }) => setTodos(data))
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <CreateTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
