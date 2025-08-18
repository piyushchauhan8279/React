import { useState } from "react";
export default function Ludo() {
  let [moves, setMoves] = useState({ green: 0, red: 0, yellow: 0, blue: 0 });
  let [arr,setArr]=useState(["no moves"]);
  let handleGreen = () => {
    // setMoves(() => {
    //   return { ...moves, green: moves.green + 1 };
    // });

    setArr((prevMove)=>{
      console.log(prevMove);
      return [...prevMove,' GREEN MOVES  ']
    })
  };
  let handleBlue = () => {
    setMoves(() => {
      return { ...moves, blue: moves.blue + 1 };
    });
  };
  let handleRed = () => {
    setMoves(() => {
      return { ...moves, red: moves.red + 1 };
    });
  };
  let handleYellow = () => {
    setMoves(() => {
      return { ...moves, yellow: moves.yellow + 1 };
    });
  };

  return (
    <div>
      <p>{arr}</p>
      <p>Green count:{moves.green}</p>
      <button style={{ backgroundColor: "green" }} onClick={handleGreen}>
        +1
      </button>
      <p>red count:{moves.red}</p>
      <button style={{ backgroundColor: "red" }} onClick={handleRed}>
        +1
      </button>
      <p>yellow count:{moves.yellow}</p>
      <button
        style={{ backgroundColor: "yellow", color: "black" }}
        onClick={handleYellow}
      >
        +1
      </button>
      <p>blue count:{moves.blue}</p>
      <button style={{ backgroundColor: "blue" }} onClick={handleBlue}>
        +1
      </button>
    </div>
  );
}
