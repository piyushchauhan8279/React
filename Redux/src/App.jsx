import './App.css'
import Todo from './components/Todo'
import {store} from "../src/app/store"
import {Provider} from "react-redux"
export default function App() {
  

  return (
    
     <>
     <Provider store={store}>
     <Todo/>
     </Provider>
     </>
  )
}
