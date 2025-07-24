import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";

import TodoItemsContextProvider from "./store/todo-items-context";
function App() {
  return (
    <>
    <TodoItemsContextProvider>
        <center>
          <AppName />
          <AddTodo />
          <WelcomeMsg />
          <TodoItems />
        </center>
    </TodoItemsContextProvider>
      
    </>
  );
}

export default App;
