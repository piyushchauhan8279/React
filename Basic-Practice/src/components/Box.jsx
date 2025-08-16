import "./Box.css";
function Box({ title, price }) {
  let disCount=price>500;
  let styles={backgroundColor: disCount?"red":""}
  return (
    <>
      <div className="box" >
        <h1>Product Name : {title}</h1>
        <p>Price is :{price}</p>
        {disCount&& <p style={styles}>Discount of 10%</p>}
      </div>
    </>
  );
}

export default Box;
