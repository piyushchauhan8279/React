import styles from "./Button.module.css";

let FoodItems = ({ item }) => {

  let buyBtnHandler=(event)=>{
    console.log(event);
    
    console.log(`${item} is bought`)
  }
  return (
    <>
      <li className="list-group-item" key={item}>
        {item}
        <button
          className={`${styles.buyBtn} btn btn-info `}
          onClick={(event)=>buyBtnHandler(event)}
        >
          buy
        </button>
      </li>
    </>
  );
};

export default FoodItems;
