import './Box.css'
function Box({title,price=300}){

  return (
    
    <>
    <div className="box">
    <h1>Product Name : {title}</h1>
    <p>Price is :{price}</p>
    </div>
    </>
  )
}

export default Box;