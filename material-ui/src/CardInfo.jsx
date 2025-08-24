import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";

let HOT_URL =
  "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1bnxlbnwwfHwwfHx8MA%3D%3D";
let COLD_URL =
  "https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGR8ZW58MHx8MHx8fDA%3D";
let RAIN_URL =
  "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
export default function CardInfo({ info }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80 ? RAIN_URL  : info.temp > 15 ? HOT_URL : COLD_URL
        }
        title="green iguana"
      />
      
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
         &nbsp; &nbsp;
          {info.humidity>80 ? <ThunderstormIcon/>:info.temp>15 ? <SunnyIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography
          component={"span"}
          variant="body2"
          sx={{ color: "text.secondary" }}
        >
          <p>
            Description :The Weather can be describe as {info.description} and
            feels like {info.feelsLike}&deg;C{" "}
          </p>
          <p>Pressure : {info.pressure}</p>
          <p>Humidity : {info.humidity}</p>
          <p>Temperature : {info.temp}&deg;C</p>
          <p>Min. Temperature : {info.tempMin}&deg;C</p>
          <p>Max. Temperature : {info.tempMax}&deg;C</p>
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
