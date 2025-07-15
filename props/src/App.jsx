import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Heading from './components/Heading'
import ErrorMsg from './components/Error'
import Food from './components/Food'
function App() {
   let foodItems=["ghee","chawal","aata","dal","paneer","chini","egg"]
   // let foodItems=[]
   return <>
   <center>
  <Heading/>
  <ErrorMsg foodItems={foodItems} />
  <Food foodItems={foodItems}/>
   </center>
  </>
}

export default App
