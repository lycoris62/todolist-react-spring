import React from "react";

function TodoItem(props) {
  const { id, content, isDone } = props.todo;

  const handleChangeCheckBox = (e) => {
    fetch("http://localhost:8080/todos/update/done", {
      "method": "PUT",
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded', 
      }),
      body: `id=${id}`,
    })
    .then((res) => res.json())
    .then((res) => {
      console.log("체크박스 클릭: ", res);
    });
  }

  const handleClickDelete = (e) => {
    fetch("http://localhost:8080/todos/delete", {
      "method": "DELETE",
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded', 
      }),
      "body": `id=${id}`
    })
    .then((res) => res.json())
    .then((res) => {
      console.log("삭제 버튼 클릭: ", res);
    });
  }

  return (
    <div>
      <span>{content}</span>
      <input type={"checkbox"} value={isDone} onChange={handleChangeCheckBox} />
      <button>수정</button>
      <button onClick={handleClickDelete}>삭제</button>
    </div>
  );
}

export default TodoItem;