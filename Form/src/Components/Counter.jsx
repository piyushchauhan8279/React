import { useState ,useEffect} from "react"

export default function Counter(){

  let [countx,setCountx]=useState(0);
  let [county,setCounty]=useState(0);
  let handleCountx=()=>{
    setCountx((prevCount)=>{
      return prevCount+1
    })
  }
  let handleCounty=()=>{
    setCounty((prevCount)=>{
      return prevCount+1
    })
  }

  useEffect(()=>{
    console.log(' side effect');
    
  },[countx,county])
  return (
    <>
    <h2>counterx :{countx}</h2>
    <button onClick={handleCountx}>+1</button>

    <h2>countery :{county}</h2>
    <button onClick={handleCounty}>+1</button>
    </>
  )
}