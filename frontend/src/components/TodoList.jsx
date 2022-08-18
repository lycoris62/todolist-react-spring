import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todos, handleClickUpdate, setUpdatingTodo, onTodoChange } = props;
  console.log("TodoList 컴포넌트에서 받아온 todos: ", todos);

  return (
      <ul>
        {
          todos?.map((todo) => (
            <li key={todo.id}>
              <TodoItem todo={todo} handleClickUpdate={handleClickUpdate} setUpdatingTodo={setUpdatingTodo} onTodoChange={onTodoChange} />
            </li>
          ))
        }
      </ul>
  )
}

export default TodoList;