import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

let image_url =
  "https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?q=80&w=1191&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
export default function CardInfo({info}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image_url} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography
          component={"span"}
          variant="body2"
          sx={{ color: "text.secondary" }}
        >
          <p>Description :The Weather can be describe as {info.description} and feels like {info.feelsLike}&deg;C </p>
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
