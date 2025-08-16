export default function Description({description}){
  let styles={textAlign:"center",fontWeight:"bold"}
  return (

    <>
   <div style={styles}>
     <p>{description[0]}</p>
     <p>{description[1]}</p>
   </div>
    </>
  )
}