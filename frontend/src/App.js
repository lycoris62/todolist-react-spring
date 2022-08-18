import React, { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoUpdate from "./components/TodoUpdate";

function App() {
  const [todos, setTodos] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updatingTodo, setUpdatingTodo] = useState({});

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

  const handleClickUpdate = (state) => setIsUpdate(state);

  return (
    <div className="App">
      <h1>TodoList</h1>
      { 
        isUpdate 
        ? <TodoUpdate onTodoChange={setTodos} handleClickUpdate={handleClickUpdate} todo={updatingTodo} /> 
        : <TodoInput onTodoChange={setTodos} /> 
      }
      <TodoList todos={todos} handleClickUpdate={handleClickUpdate} setUpdatingTodo={setUpdatingTodo} onTodoChange={setTodos} />
    </div>
  );
}

export default App;
