import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/TodoSlice";
export default function Form(){
  let dispatch=useDispatch();
  let [task,setTask]=useState("");
  let handleChange=(event)=>{
    setTask(event.target.value);
  }

  let handleAdd=(event)=>{
    event.preventDefault();
    setTask("");
    dispatch(addTodo(task))
  }
  return (
    <>
    <form onSubmit={handleAdd}>
      <input value={task} type="text" placeholder="write your task" onChange={handleChange} />
      <button>Add</button>
    </form>
    </>
  )
}