import React from "react";

function TodoItem(props) {
  const { content, isDone } = props;

  return (
    <div>
      <span>{content}</span>
      <input type={"checkbox"} value={isDone}/>
    </div>
  );
}

export default TodoItem;