import "./Counter.css";
import { useState } from "react";
export default function Counter() {
  let [count, setCount] = useState(0);
  let handleBtnClick = () => {
    setCount(count + 1);
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
