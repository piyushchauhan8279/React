import styles from './FoodInput.module.css'
let FoodInput=()=>{
  const inputhandler=(event)=>{
    console.log(event.target.value);
  }
  return <>
  <input type="text" placeholder='Enter whatever you want' className={styles.myInput} onChange={(event)=>inputhandler(event)}/>
  </>
}

export default FoodInput