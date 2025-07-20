import styles from './Input.module.css'

let Input = ({ calval }) => {
  return (
    <input
      type="text"
      className={styles.myInput}
      readOnly
      value={calval}
    />
  );
}

export default Input;
