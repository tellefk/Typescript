import React, { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos=[new Todo("Learn React"),new Todo("Learn Typescript")]

  function addTodo(enteredText: string) {
    const newTodo = new Todo(enteredText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  }

  function removeTodo(id: string) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="App">
      <header>Big header</header>
      <div className="sidenav">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <main>
        <NewTodo addTodo={addTodo} />
        <Todos items={todos} removeTodo={removeTodo} />
      </main>
    </div>
  );
}

export default App;
