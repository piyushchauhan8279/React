import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Heading from './components/Heading'
import ErrorMsg from './components/Error'
import Food from './components/Food'
import Container from './components/Container'
import FoodInput from './components/FoodInput'

import { useState } from 'react'
function App() {

  let [foodItems,setFoodState]=useState([]);

  const inputhandler=(event)=>{
    if(event.key==='Enter'){
      let newFoodItem=event.target.value;
      event.target.value=''
      foodItems=[...foodItems,newFoodItem]
      setFoodState(foodItems)
    }    
  }

  return <>
  <Container>
  <Heading/>
  <FoodInput onKeyDown={inputhandler}/>
  <ErrorMsg foodItems={foodItems} />
  <Food foodItems={foodItems}/>
  </Container>
  </>
}

export default App
