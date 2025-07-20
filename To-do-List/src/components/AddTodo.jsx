import styles from "./AddTodo.module.css";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
function AddTodo({ newTaskItem }) {
  let [dueTask, setDuetask] = useState("");
  let [dueDate, setDueDate] = useState("");

  let handleDueTask = (event) => {
    setDuetask(event.target.value);
  };

  let handleDueDate = (event) => {
    setDueDate(event.target.value);
  };

  let handleAddBtn = () => {
    newTaskItem(dueTask, dueDate);
    setDuetask("");
    setDueDate("");
  };

  return (
    <div className={`${styles.taskRow} container`}>
      <div className={`${styles.myRow} row`}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter your Todo"
            onChange={handleDueTask}
            value={dueTask}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDueDate} value={dueDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            value={dueDate}
            className={`${styles.myBtn} btn btn-success`}
            onClick={handleAddBtn}
          >
            <IoMdAdd/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
