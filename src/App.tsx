import React from 'react';
import './App.css';
import Todos from "./components/Todos"


import Todo from "./models/todo"


function App() {
  const todos=[new Todo("Learn React"),new Todo("Learn Typescript")]

  return (
    <div className="App">
      <header>
        Big header
      </header>
      <main>
        <Todos items={todos}/>
      </main>

    </div>
  );
}

export default App;
