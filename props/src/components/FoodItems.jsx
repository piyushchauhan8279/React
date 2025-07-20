import styles from "./Button.module.css";

let FoodItems = ({ item, bought, onClickHandler }) => {
  return (
    <>
      <li className={`list-group-item ${bought ? "active" : ""}`}>

        {item}
        <button
          className={`${styles.buyBtn} btn btn-info  `}
          onClick={onClickHandler}
        >
          buy
        </button>
      </li>
    </>
  );
};

export default FoodItems;
