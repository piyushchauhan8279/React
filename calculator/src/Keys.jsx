import styles from './Keys.module.css'
import Buttons from './Buttons'

let Keys = ({ arr, clickBtn }) => {
  return (
    <div className={styles.myKeys}>
      {arr.map((item) => (
        <Buttons item={item} clickBtn={clickBtn} />
      ))}
    </div>
  );
}

export default Keys;
