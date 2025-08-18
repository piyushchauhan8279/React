export default function Item({ data ,handleDelete}) {
  
  return (
    <>
      <div style={{display:"flex",justifyContent:"center" , marginTop:"30px"}}>
        <p style={{ height: "30px" ,minWidth:"250px"}}>{data}</p>
        <button onClick={handleDelete} style={{padding:"3px", color:"white",backgroundColor:"red",width:"44px",

        }}>Delete</button>

        

      </div>
    </>
  );
}
