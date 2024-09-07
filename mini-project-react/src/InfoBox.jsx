import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox (){
    const INIT_URL = "https://media.istockphoto.com/id/1307512241/photo/aerial-view-of-dust-storm-over-imperial-valley-california.jpg?s=612x612&w=is&k=20&c=8_5l_o09PE5zo0-bWdP365EARbeDGtUFL_NEU8EAHIA="
    let info = {
        city: "Dehli",
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    };
    return(
        <div className="InfoBox">
            <h1>WeatherInfo-{info.weather}</h1>
            <div className='Card'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="p">
          {info.city}
        </Typography>
        <Typography variant="body2"  color = 'text.secondary' component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min temp = {info.tempMin}&deg;C</p>
          <p>Max temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i> {info.weather} </i>. </p>

        </Typography>
      </CardContent>
      
    </Card>

        </div>
        </div>
    )

}