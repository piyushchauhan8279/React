import styles from "./AddTodo.module.css";
import { useRef, useContext } from "react";
import { IoMdAdd } from "react-icons/io";

import { TodoItemsContext } from "../store/todo-items-context";
function AddTodo() {
  const { newTaskItem } = useContext(TodoItemsContext);
  let dueTaskEl = useRef();
  let dueDateEl = useRef();

  let handleAddBtn = () => {
    let dueTask = dueTaskEl.current.value;
    let dueDate = dueDateEl.current.value;
    newTaskItem(dueTask, dueDate);

    // Optional: Clear inputs after adding
    dueTaskEl.current.value = "";
    dueDateEl.current.value = "";
  };

  return (
    <div className={`${styles.taskRow} container`}>
      <div className={`${styles.myRow} row`}>
        <div className="col-6">
          <input ref={dueTaskEl} type="text" placeholder="Enter your Todo" />
        </div>
        <div className="col-4">
          <input ref={dueDateEl} type="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`${styles.myBtn} btn btn-success`}
            onClick={handleAddBtn}
          >
            <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
