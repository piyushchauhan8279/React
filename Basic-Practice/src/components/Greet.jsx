function Greet({Name,textColor}) {
  let styles={color:textColor};
  return(
  <>
    <h1 style={styles}>Hello !! {Name}</h1>
  </>
  )
}

export default Greet;
