import React, {useContext } from "react";
import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

import {TodoContext} from "./store/todos-context"

function App() {
  const todoCtx=useContext(TodoContext)
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
        {/* <NewTodo addTodo={todoCtx.addTodo} /> */}
        {/* <Todos items={todoCtx.items} removeTodo={todoCtx.removeTodo} /> */}
        <NewTodo/>
        <Todos items={todoCtx.items}/>
      </main>
    </div>
  );
}

export default App;
