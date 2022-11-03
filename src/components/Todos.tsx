import React from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";

// option can add ?
const Todos: React.FC<{ items: Todo[]; removeTodo: (id:string) => void }> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <TodoItem
            key={item.id}
            removeTodo={props.removeTodo}
            id={item.id}
            text={item.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
