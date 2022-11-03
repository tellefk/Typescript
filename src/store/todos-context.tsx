import React, {useState} from "react"
import Todo from "../models/todo"

const TodoContext=React.createContext<{
    items:Todo[],
    addTodo:()=>void,
    removeTodo:()=>void
}>({
    items:[],
    addTodo:()=>{},
    removeTodo:()=>(id:string)=>{}
})


const TodosContextProvider:React.FC=(props)=>{
    

    return <TodoContext.Provider value={TodoContext} >{props.children}</TodoContext.Provider>
}