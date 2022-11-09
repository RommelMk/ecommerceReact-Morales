import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function ActionAreaCard({detail}) {
  return (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={detail.img}
              alt="img sample"
            />
           <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {detail.service}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {detail.duration}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {detail.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
  );
}
