import { useState } from "react";
import Item from "./Item";
export default function InputBox() {
  let [task, setTask] = useState("");
  let [tasks, setTasks] = useState([]);
  let handleInput = (event) => {
    setTask(event.target.value);
  };

  let handleAddBtn = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  let handleDelete=(index)=>{
    let updateTasks=tasks.filter((t,i)=> i!=index)
    setTasks(updateTasks)
  }

  let stylesInput = { padding: "8px", marginRight: "5px",width:"200px" };
  let stylesAddBtn = {
    padding: "3px",
    backgroundColor: "green",
    color: "white",
    leftMargin:"24px",
    width:"44px"
  };
  return (
    <>
      <div >
        <input
          onChange={handleInput}
          style={stylesInput}
          type="text"
          placeholder="Write your tasks"
          value={task}
          id="input-box"
        />
        <button style={stylesAddBtn} onClick={handleAddBtn}>
          Add
        </button>
      </div>

      <div>
      {tasks.map((task,idx)=><Item key={idx} data={task} handleDelete={()=>handleDelete(idx)}></Item>)}
      </div>
    </>
  );
}
