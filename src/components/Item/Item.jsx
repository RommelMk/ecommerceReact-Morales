import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function ActionAreaCard({info}) {
  return (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={info.img}
              alt="img sample"
            />
           <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.service}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {info.duration}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {info.price}
              </Typography>
              <Link to={"/item/" + info.id}>Ver más info</Link>
            </CardContent>
          </CardActionArea>
        </Card>
  );
}


/* export default function item({info}) {
  return (
    <a href="" className='services'>
        <img src={info.img} alt="" />
        <p>{info.service}</p>
        <p>{info.duration}</p>
        <p>{info.price}</p>
    </a>
  )
} */
