import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import Item from "./Item";

export default function InputBox() {
  let [task, setTask] = useState("");
  let [tasks, setTasks] = useState([]);

  let handleMark = () => {
    setTasks((prev) => {
      
      return prev.map((t) => {
        return { ...t, isDone: (t.isDone)?false:true };
      });
    });
  };

  let handleMarkOne = (id) => {
      setTasks((prev)=>{
      return prev.map((t) => {
      if (t.id === id) {
        return { ...t, isDone: (t.isDone)?false:true };
      } else {
        return t;
      }
    });

    });
  };

  // let handleUpdateOne=(id)=>{

  //   setTasks((prevVal)=>{
  //     return prevVal.map((t)=>{
  //     if(t.id==id){
  //       return {...t,task:t.task.toUpperCase()};
  //     }
  //     else{
  //       return t;
  //     }
  //   })
  //   })

  // }

  // let handleUpdate=()=>{
  //   setTasks((prevTasks)=>{
  //     return prevTasks.map((t)=>{return { ...t,task:t.task.toUpperCase()}})
  //   })
  // }

  let handleInput = (event) => {
    setTask(event.target.value);
  };

  let handleAddBtn = () => {
    if (task.trim() === "") return;
    setTasks((prevTasks) => {
      return [...prevTasks, { task: task, id: uuidv4(), isDone: false }];
    });
    setTask("");
  };

  let handleDelete = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((t, i) => t.id != taskId);
    });
  };

  let stylesInput = { padding: "8px", marginRight: "5px", width: "200px" };
  let stylesAddBtn = {
    padding: "3px",
    backgroundColor: "green",
    color: "white",
    leftMargin: "24px",
    width: "44px",
  };
  return (
    <>
      <div>
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
        {tasks.map((task) => (
          <Item
            key={task.id}
            data={task.task}
            handleDelete={() => handleDelete(task.id)}
            handleMarkOne={() => {
              handleMarkOne(task.id);
            }}
            isDone={task.isDone}
          ></Item>
        ))}
      </div>

      <button
        style={{ marginTop: "60px", padding: "10px" }}
        onClick={handleMark}
      >
        Mark All as Done
      </button>
    </>
  );
}
