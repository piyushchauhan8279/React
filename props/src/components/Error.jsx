import styles from "./Error.module.css";
let ErrorMsg = ({ foodItems }) => {
  return (
    <>
      {foodItems.length === 0 && (
        <h3 className={styles.errorHeading}>i am still hungry</h3>
      )}
    </>
  );
};

export default ErrorMsg;
