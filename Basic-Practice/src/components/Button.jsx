export default function Button(){
  let handleClick=()=>{
    console.log('thank you for clicking me');
  } 

  let handleDblClick=()=>{
    console.log('ohh ! you do dbl click');
  }

  let handleMouseOver=()=>{
    console.log('you over on me');
    
  }
  return (
    <>
    <button onClick={handleClick}>Click me </button>
    <p onDoubleClick={handleDblClick}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur quos eligendi perspiciatis! Voluptates voluptatem sit, tenetur commodi vel excepturi provident repellat quasi dignissimos minima debitis iure rerum voluptas neque!</p>
    <p onMouseOver={handleMouseOver}>this is a paragraph</p>
    </>
  )
}