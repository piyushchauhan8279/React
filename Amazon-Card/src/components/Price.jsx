export default function Price({ price }) {
  let styles={backgroundColor:'#e8b62d',height:"40px", borderBottomLeftRadius:"15px",borderBottomRightRadius:"15px"};

  let oldPriceStyle={textDecoration:"line-through"}
  let newPriceStyle={fontWeight:"bold"}
  return (
    <>
      <div style={styles}>
        <span style={oldPriceStyle}>{price[0]}</span>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span style={newPriceStyle}>{price[1]}</span>
      </div>
    </>
  );
}
