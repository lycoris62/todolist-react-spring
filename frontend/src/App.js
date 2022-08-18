import React, { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/todos", {
      method: "GET",
    })
    .then((res) => res.json())
    .then((res) => {
      console.log("받아온 값: ", res);
      setTodos(res);
      console.log("todo state: ", todos);
    });
  }, []);

  return (
    <div className="App">
      <h1>TodoList</h1>
      <TodoInput />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
