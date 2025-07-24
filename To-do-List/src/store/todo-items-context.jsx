import { createContext } from "react";
import { useReducer } from "react";

export let TodoItemsContext = createContext({
  taskItem: [],
  newTaskItem: () => {},
  onClickBtn: () => {},
});

let TodoItemsContextProvider = ({ children }) => {
  // reducer method
  let reducer = (taskItem, action) => {
    let newTask = [];
    if (action.type === "NEW_TODO") {
      newTask = [
        ...taskItem,
        { task: action.payload.dueTask, dueDate: action.payload.dueDate },
      ];
    } else if (action.type === "DELETE_TODO") {
      newTask = taskItem.filter(
        (item) => item.task != action.payload.deletedItem
      );
    }
    return newTask;
  };

  const [taskItem, dispatch] = useReducer(reducer, []);

  let handleTaskItem = (dueTask, dueDate) => {
    let action = {
      type: "NEW_TODO",
      payload: { dueTask, dueDate },
    };

    dispatch(action);
  };

  let handleDeleteBtn = (deletedItem) => {
    let action = {
      type: "DELETE_TODO",
      payload: {
        deletedItem,
      },
    };
    dispatch(action);
  };

  return <>
  <TodoItemsContext.Provider
        value={{
          taskItem,
          newTaskItem: handleTaskItem,
          onClickBtn: handleDeleteBtn,
        }}
       
      >
        {children}
      </TodoItemsContext.Provider>
  </>;
};

export default TodoItemsContextProvider;
