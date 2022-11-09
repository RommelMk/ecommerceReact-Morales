import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { servicios } from '../data.js';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.scss';

export default function ItemListContainer({greeting}) {
  const {idcategory} = useParams();

  const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
      const getServicesData = new Promise (res => {
        setTimeout (() => {
          res(servicios);
        }, 2000);
      });
      getServicesData.then((res) => {
        if(idcategory) {
          setServicesData(res.filter(item => item.category == idcategory));
        } else {
          setServicesData(res);
      }
    });
    }, [idcategory]);

  return (
    <>
      <div className='greeting'>{greeting}</div>
      <Grid container justify="center">
        <ItemList data={servicesData}/>
      </Grid>
    </>

  )
}
