import TextField from "@mui/material/TextField";
import "./Weather.css";
import { useState } from "react";
let URL = "https://api.openweathermap.org/data/2.5/weather";
let API_KEY = "5567ae7e011cb504a0b84ee320c93618";
export default function Weather() {
  let [text, setText] = useState("");
  let handleChange = (event) => {
    setText(event.target.value);
  };
let generateData = async () => {
  let response = await fetch(`${URL}?q=${text}&appid=${API_KEY}&units=metric`);
  let jsonResponse = await response.json();
  console.log(jsonResponse);
 let info = {
  feelsLike: jsonResponse.main.feels_like,
  humidity: jsonResponse.main.humidity,
  pressure: jsonResponse.main.pressure,
  temp: jsonResponse.main.temp,
  tempMin: jsonResponse.main.temp_min,
  tempMax: jsonResponse.main.temp_max,
  description:jsonResponse.weather[0].description
};

  console.log(info);
  
};


  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
    setText("");
    generateData();
  };
  return (
    <>
      <h2>Weather App</h2>
      <form id="form" onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          id="search"
          label="city"
          variant="outlined"
          required
          value={text}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
