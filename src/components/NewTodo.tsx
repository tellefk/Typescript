import React, { useRef, useState } from "react";

const NewTodo: React.FC<{ addTodo: (text: string) => void }> = (props) => {
  const newTodo = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = newTodo.current!.value;
    if (enteredText.trim().length == 0) {
      //throw an error
      return;
    }
    props.addTodo(enteredText);
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
