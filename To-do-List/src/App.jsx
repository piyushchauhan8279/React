import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";

import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-context";

function App() {
  let [taskItem, settaskItem] = useState([]);

  let handleTaskItem = (dueTask, dueDate) => {
    if (dueTask && dueDate) {
      settaskItem([...taskItem, { task: dueTask, dueDate }]);
    }
  };

  let handleDeleteBtn = (deletedItem) => {
    settaskItem(taskItem.filter((item) => item.task != deletedItem));
  };

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          taskItem,
          newTaskItem: handleTaskItem,
          onClickBtn: handleDeleteBtn,
        }}
      >
        <center>
          <AppName />
          <AddTodo />
          <WelcomeMsg />
          <TodoItems />
        </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
