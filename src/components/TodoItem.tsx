import React from "react"


const TodoItem:React.FC<{removeTodo:(id:string)=>void,id:string,text:string}>=(props)=>{
    
    const clickMan =(e:any)=>{
        props.removeTodo(props.id);
    }
    return <li onClick={clickMan}> {props.text}</li>
} 


export default TodoItem