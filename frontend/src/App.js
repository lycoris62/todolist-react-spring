import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/todos", {
      method: "GET",
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      setTodos(res);
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
