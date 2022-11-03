import React, { useRef, useContext } from "react";

import { TodoContext } from "../store/todos-context";

const NewTodo: React.FC = (props) => {
  const newTodo = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodoContext);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = newTodo.current!.value;
    if (enteredText.trim().length == 0) {
      //throw an error
      return;
    }
    todoCtx.addTodo(enteredText);
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <label htmlFor="text">Add Todo</label>
        <input ref={newTodo} type="text" id="text"></input>
        <button type="submit">Add todo</button>
      </form>
    </React.Fragment>
  );
};

// ADD MANTINE STYLES HERE!

export default NewTodo;
