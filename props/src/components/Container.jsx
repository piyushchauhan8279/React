import styles from './Container.module.css'
let Container=({children})=>{
  return <>
  <div className={styles.myContainer}>{children}</div>
  </>
}

export default Container;