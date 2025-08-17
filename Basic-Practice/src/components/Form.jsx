export default function Form(){
  let handleSubmit=(event)=>{
    event.preventDefault();
    console.log('form submitted');
  }
  return (

    <>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="write something" />
    <button>Submit</button>
    </form>
    </>
  )
}