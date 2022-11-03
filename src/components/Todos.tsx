import React, { useContext } from "react";
import { TodoContext } from "../store/todos-context";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

// option can add ?
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  const todoCtx=useContext(TodoContext)
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <TodoItem
            key={item.id}
            removeTodo={todoCtx.removeTodo}
            id={item.id}
            text={item.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
