import { useState, useEffect } from "react";
export default function Joker() {
  const URL = "https://official-joke-api.appspot.com/random_joke";
  let [joke, setJoke] = useState({});
  let handleJokes = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  useEffect(() => {
      async function getJoke(){
      let res=await fetch(URL)
      let jsonResponse=await res.json();
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getJoke();
  }, []);
  return (
    <>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
      <button onClick={handleJokes}>get a new joke</button>
    </>
  );
}
