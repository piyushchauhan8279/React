import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "./Search.css";

import { useState } from "react";

let URL = "https://api.openweathermap.org/data/2.5/weather";
let API_KEY = "5567ae7e011cb504a0b84ee320c93618";

export default function Search({ updateInfo }) {
  let [text, setText] = useState("");
  let [err, setErr] = useState(false);

  let handleChange = (event) => {
    setText(event.target.value);
  };

  let generateData = async () => {
    try {
      let response = await fetch(
        `${URL}?q=${text}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      if (jsonResponse.cod != 200) {
        // city not found
        setErr(true);
        return null;
      }

      setErr(false); // clear old error if success

      let info = {
        city: text,
        feelsLike: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        pressure: jsonResponse.main.pressure,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        description: jsonResponse.weather[0].description,
      };

      console.log(info);
      return info;
    } catch (error) {
      return error;
    }
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log("submitted");
      setText("");
      let info = await generateData();
      if (info) {
        updateInfo(info);
      }
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          id="search"
          label="city"
          variant="outlined"
          required
          value={text}
        />
        <button style={{backgroundColor:"greenyellow"}} type="submit">Search</button>
      </form>

      {err && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">This city does not match</Alert>
        </Stack>
      )}
    </>
  );
}
