import Item from "./Item";
import styles from './TodoItems.module.css'
function TodoItems({ tasks }) {
  return (
    <div className={`${styles.taskRow} container`}>
      {tasks.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}

export default TodoItems;
