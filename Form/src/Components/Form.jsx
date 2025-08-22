import { useState } from "react";
export default function Form() {
  // stateVariable :- object of diff input like username,password,fullname
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  // single input handler
  let handleInput = (event) => {
    // field

    // let fieldName = event.target.name;
    // value

    // let newVal=event.target.value;

    // update state

    setFormData((currData)=>{
      return {...currData,[event.target.name]:event.target.value}
    })
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ fullName: "", userName: "", password: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          value={formData.fullName}
          onChange={handleInput}
          type="text"
          style={{ display: "block" }}
          placeholder="Write your name"
          name="fullName"
        />

        <label htmlFor="username">UserName</label>
        <input
          id="username"
          value={formData.userName}
          onChange={handleInput}
          type="text"
          style={{ display: "block" }}
          placeholder="Write your username"
          name="userName"
        />
        
        <label htmlFor="password">password</label>
        <input
          id="password"
          value={formData.password}
          onChange={handleInput}
          type="password"
          style={{ display: "block" }}
          placeholder="Write your password"
          name="password"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
