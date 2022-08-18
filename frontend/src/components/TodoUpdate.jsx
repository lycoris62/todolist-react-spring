import React, { useState } from "react";

function TodoUpdate(props) {
  const { onTodoChange, handleClickUpdate, todo } = props;
  const [content, setContent] = useState("");
  console.log("updating todo: ", todo);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/todos/update/content", {
      "method": "PUT",
      body: JSON.stringify({ id: todo.id, content }),
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => res.json())
    .then((res) => {
      console.log("submit log: ", res);
      setContent("");
      onTodoChange(res);
      handleClickUpdate(false);
    })
  }

  const handleChange = (e) => setContent(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        수정: 
        <input type={"text"} onChange={handleChange} value={todo.content} name="content" id="content" placeholder="할일을 입력하세요." />
      </label>
      <button type="submit">수정</button>
    </form>
  );
}

export default TodoUpdate;