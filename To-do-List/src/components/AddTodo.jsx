import styles from './AddTodo.module.css'
function AddTodo() {
  return (
    <div className={`${styles.taskRow} container`}>
      <div className={`${styles.myRow} row`}>
        <div className="col-6">
          <input type="text" placeholder="Enter your Todo" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className={`${styles.myBtn} btn btn-success`}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
