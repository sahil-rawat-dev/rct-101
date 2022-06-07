import React from "react";
import { useState } from "react";

const Todo=()=>{

    let [value,setValue]=useState("ABCD")
    const [todo,setTodo]=useState([])
     return(
         <div>
             Todo
             <input value={value} onChange={(e)=>{
                 setValue(e.target.value)
             }}/>
             <button onClick={()=>{
                 todo.push();
                 setTodo(...todos,{value:value})
             }}> add</button>
             {/*TODOS*/}
             {todos.map((todo)=>{
                 <div>{todo.value}</div>
             })}
         </div>
         )   
         
}
export default Todo