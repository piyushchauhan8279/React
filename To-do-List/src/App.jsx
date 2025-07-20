import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  let [taskItem, settaskItem] = useState([]);

  let handleTaskItem = (dueTask, dueDate) => {
    if (dueTask && dueDate) {
      settaskItem([...taskItem, { task: dueTask, dueDate }]);
    }
  };

  let handleDeleteBtn=(deletedItem)=>{
    
    
    settaskItem(taskItem.filter((item)=>item.task!=deletedItem))
  }

  return (
    <>
      <center>
        <AppName />
        <AddTodo newTaskItem={handleTaskItem} />
        {taskItem.length===0 && <WelcomeMsg/>} 
        <TodoItems tasks={taskItem} onClickBtn={handleDeleteBtn}/>
      </center>
    </>
  );
}

export default App;
