import { useSelector } from "react-redux";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/Todo/TodoSlice";
import { markAsDone } from "../features/Todo/TodoSlice";
export default function Todo() {
  let dispatch = useDispatch();
  let todos = useSelector((state) => state.TodoReducer.todos);
  console.log(todos);

  let handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  let handleMark = (id) => {
    dispatch(markAsDone(id))
  };
  return (
    <>
      <Form></Form>
      <h2>Todo Tasks</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{textDecoration:(todo.isDone)?"line-through":""}}>
            {todo.task} <button onClick={()=>handleMark(todo.id)}>Done</button>{" "}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
