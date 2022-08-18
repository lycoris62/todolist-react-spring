import React, { useState } from "react";

function TodoInput(props) {
  const { onTodoChange } = props;
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/todos/new", {
      "method": "POST",
      body: JSON.stringify({ content }),
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => res.json())
    .then((res) => {
      console.log("submit log: ", res);
      onTodoChange(res);
    })
  }

  const handleChange = (e) => setContent(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type={"text"} onChange={handleChange} value={content} name="content" placeholder="할일을 입력하세요." />
      <button type="submit">입력</button>
    </form>
  );
}

export default TodoInput;