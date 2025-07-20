import Item from "./Item";
import styles from './TodoItems.module.css'
function TodoItems({ tasks,onClickBtn }) {
  return (
    <div className={`${styles.taskRow} container`}>
      {tasks.map((item) => (
        <Item item={item} onClickBtn={onClickBtn} />
      ))}
    </div>
  );
}

export default TodoItems;
