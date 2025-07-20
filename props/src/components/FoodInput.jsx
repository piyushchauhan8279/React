import styles from './FoodInput.module.css'
let FoodInput=({onKeyDown})=>{
  
  return <>
  <input type="text" placeholder='Enter whatever you want' className={styles.myInput} onKeyDown={onKeyDown}/>
  </>
}

export default FoodInput