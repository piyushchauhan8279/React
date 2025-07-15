import styles from './Keys.module.css'
import Buttons from "./Buttons"
let Keys=({arr})=>{
return <div className={styles.myKeys}>
  {arr.map(item=><Buttons item={item}/>)}
</div>
}

export default Keys