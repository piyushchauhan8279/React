import Search from "./Search";
import CardInfo from "./CardInfo";
import { useState } from "react";
export default function Weather() {
  let [weatherInfo,setWeatherInfo]=useState({
      city:"delhi",
      feelsLike: 35.12,
      humidity: 72,
      pressure: 1000,
      temp: 29.84,
      tempMin: 29.84,
      tempMax: 29.84,
      description: "few clouds",
  })

  let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo)
  }
  return (
    <>
      <Search updateInfo={updateInfo}/>
      <CardInfo info={weatherInfo} />
    </>
  );
}
