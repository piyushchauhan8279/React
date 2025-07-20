import styles from './Container.module.css'
import Input from './Input'
import Keys from './Keys'
import { useState } from 'react'

let Container = ({ arr }) => {
  const [calval, setCalVal] = useState('');

  let clickBtn = (value) => {
    if (value.toUpperCase() === 'C') {
      setCalVal('');
    } else if (value === '=') {
      try {
        setCalVal(eval(calval).toString());
      } catch (err) {
        setCalVal('Error');
      }
    } else {
      setCalVal(calval + value);
    }
  }

  return (
    <div className={styles.myContainer}>
      <Input calval={calval} />
      <Keys arr={arr} clickBtn={clickBtn} />
    </div>
  )
}

export default Container;
