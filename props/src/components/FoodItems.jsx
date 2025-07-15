import styles from './FoodItems.module.css'
let FoodItems = ({ item }) => {
  return (
    <>
      <li className={styles.myItems} key={item}>
        {item}
      </li>
    </>
  );
};

export default FoodItems;
