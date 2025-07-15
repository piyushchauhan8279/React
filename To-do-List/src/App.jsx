import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems"
function App() {
  const tasks = [
  { task: "DSA",      dueDate: "18-07-2025" },
  { task: "MERN",     dueDate: "25-07-2025" },
  { task: "Aptitude", dueDate: "25-07-2025" },
  {task:"bgmi",dueDate:"20-07-2025"}
];
  return (
    <>
      <center>
        <AppName />
        <AddTodo />
        <TodoItems tasks={tasks}/>
      </center>
    </>
  );
}

export default App;
