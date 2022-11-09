import { Grid } from '@mui/material';
import React from 'react';
import Item from '../Item/Item';

 const ItemList = ({ data = [] }) => {
  return data.map(service => (
    <Grid item md={3} key={service.id}>
      <Item key={service.id} info={service} />
    </Grid>
));
  
}

export default ItemList;