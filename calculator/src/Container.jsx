import styles from './Container.module.css'
import Input from './Input'
import Keys from './Keys'
let Container=({arr})=>{
  return <>
  <div className={`${styles.myContainer}`}>
    <Input/>
    <Keys arr={arr}/>
  </div>
  </>
}

export default Container