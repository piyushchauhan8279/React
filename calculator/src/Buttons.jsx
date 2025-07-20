import styles from './Buttons.module.css'

let Buttons = ({ item, clickBtn }) => {
  return (
    <button className={styles.myBtn} onClick={() => clickBtn(item)}>
      {item}
    </button>
  );
}

export default Buttons;
