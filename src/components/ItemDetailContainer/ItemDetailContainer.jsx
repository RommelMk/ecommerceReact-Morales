import React from 'react'
import {servicios} from '../data.js'
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount.jsx';

export default function ItemDetailContainer() {
  const { iditem } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const servicePromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(servicios.find((item) => item.id == iditem));
      }, 2000);
    });

    servicePromise.then((res) => {
      setService(res)
    });
  }, [iditem]);

  const onAdd =(quantity) => {
    console.log(`seleccionaste ${quantity} productos`)
  }

  return (
     <>
      <ItemDetail detail={service} />
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
     </>
  )
}
