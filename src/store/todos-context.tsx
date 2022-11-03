import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContext = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

type Props = {
    children: React.ReactNode
 }

export const TodoContext = React.createContext<TodosContext>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});



const TodosContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

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

  const contextValue: TodosContext = {
    items: todos,
    addTodo: addTodo,
    removeTodo: removeTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};


export default TodosContextProvider
