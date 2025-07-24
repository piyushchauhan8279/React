import styles from './WelcomeMsg.module.css'
import { useContext } from 'react';
import { TodoItemsContext } from '../store/todo-items-context';
let WelcomeMsg=()=>{
  let {taskItem}=useContext(TodoItemsContext);
  return <>
  {taskItem.length===0 && <p className={styles.welcome}>Nothing to do , Enjoy your day</p>}
  
  </>
}

export default WelcomeMsg;