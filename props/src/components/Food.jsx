import FoodItems from "./FoodItems";

import { useState } from "react";

let Food = ({ foodItems}) => {
  let [containItem,setContainItem]=useState([]);
  let onClickHandler=(event,item)=>{
     let  newItem=[...containItem,item];
      setContainItem(newItem)
  }
  return (
    <>
      <ul className="list-group">
        {foodItems.map((item) => (
          <FoodItems item={item} bought={containItem.includes(item)} onClickHandler={(event)=>onClickHandler(event,item)
          }></FoodItems>
        ))}
      </ul>
    </>
  );
};

export default Food;
