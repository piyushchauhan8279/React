import styles from "./Item.module.css";
import { MdDelete } from "react-icons/md";

import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-context";
function Item({ item }) {
  let {onClickBtn} =useContext(TodoItemsContext)
  return (
    <div className={`${styles.myRow} row`}>
      <div className="col-6">{item.task}</div>
      <div className="col-4">{item.dueDate}</div>
      <div className="col-2">
        <button type="button" onClick={()=>onClickBtn(item.task)} className={`btn btn-danger ${styles.mybtn}` }>
          <MdDelete/>
        </button>
      </div>
    </div>
  );
}

export default Item;
