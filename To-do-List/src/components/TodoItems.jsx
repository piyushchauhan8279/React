import Item from "./Item";
import styles from "./TodoItems.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-context";

function TodoItems() {
  const { taskItem} = useContext(TodoItemsContext);

  return (
    <div className={`${styles.taskRow} container`}>
      {taskItem.map((item, idx) => (
        <Item
          item={item}
          // key={item}
        />
      ))}
    </div>
  );
}

export default TodoItems;
