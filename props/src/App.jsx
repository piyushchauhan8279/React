import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Heading from './components/Heading'
import ErrorMsg from './components/Error'
import Food from './components/Food'
import Container from './components/Container'
import FoodInput from './components/FoodInput'
function App() {
   let foodItems=["ghee","chawal","aata","dal","paneer","chini","egg"]
   // let foodItems=[]
   return <>
  <Container>
  <Heading/>
  <FoodInput/>
  <ErrorMsg foodItems={foodItems} />
  <Food foodItems={foodItems}/>
  </Container>
  </>
}

export default App
