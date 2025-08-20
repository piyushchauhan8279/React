export default function Item({ data ,handleDelete, handleMarkOne,isDone}) {
  
  let styles={textDecoration:isDone?"line-through":"none",
    height: "30px" ,minWidth:"250px"
  }
  return (
    <>
      <div style={{display:"flex",justifyContent:"center" , marginTop:"30px"}}>
        <p style={styles}>{data}</p>
        <button onClick={handleDelete} style={{padding:"3px", color:"white",backgroundColor:"red",width:"44px",

        }}>Delete</button>

        <button style={{padding:"3px",marginLeft:"3px", color:"white",backgroundColor:"green",width:"74px",
        } } onClick={handleMarkOne} >Mark as Done</button>
      </div>
    </>
  );
}
