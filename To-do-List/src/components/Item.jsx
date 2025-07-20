import styles from "./Item.module.css";
function Item({ item ,onClickBtn}) {
  return (
    <div className={`${styles.myRow} row`}>
      <div className="col-6">{item.task}</div>
      <div className="col-4">{item.dueDate}</div>
      <div className="col-2">
        <button type="button" onClick={()=>onClickBtn(item.task)} className={`btn btn-danger ${styles.mybtn}` }>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Item;
