import './App.css'
import { sum } from './helper';
import Lottery from './components/Lottery'
function App() {

  let winCond=(ticket)=>{
    return sum(ticket) === 20;
  }

  return (
    <>
     <h1>Lottery Game</h1>
     <Lottery n={3} winCond={winCond}/>
    </>
  )
}

export default App
