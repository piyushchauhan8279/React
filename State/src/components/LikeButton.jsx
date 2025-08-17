import { useState } from "react"
import './LikeButton.css'
export default function LikeButton(){

  
  let [isLike,setIsLike]=useState(true);
  let handleLike=()=>{
    setIsLike(!isLike)
  }

  let [DarkMode,setDarkMode]=useState(true)
  let handleMode=()=>{
  setDarkMode(!DarkMode)
  if(DarkMode){
    document.querySelector("body").style.backgroundColor="grey"
  }
  else{
    document.querySelector("body").style.backgroundColor="yellow"
  }
  }



  let LikeBtnstyles={fontSize:"200px"}
  let UnLikeBtnstyles={color:"red",fontSize:"200px"}
  return (
    <>
    <div className="myDiv">
      
      <span onClick={handleLike}>{isLike?<i class="fa-regular fa-heart" style={LikeBtnstyles}></i>:<i class="fa-solid fa-heart" style={UnLikeBtnstyles}></i>}</span>
      <button className="myBtn" onClick={handleMode}>Change Mode</button>
    </div>
    </>
  )
}