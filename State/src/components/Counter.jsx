import "./Counter.css";
import { useState } from "react";
export default function Counter() {
  function init(){
    console.log('in init method');
    return 0;
  }
  let [count, setCount] = useState(init);
  let handleBtnClick = () => {
    setCount((currVal)=>{
      return currVal+1;
    });

    console.log(count);
  };

  let styles = { textAlign: "center" };
  return (
    <>
      <div style={styles}>
        <div id="counter">Current Count Value : {count}</div>
        <button id="btn" onClick={handleBtnClick}>
          Increase count
        </button>
      </div>
    </>
  );
}
