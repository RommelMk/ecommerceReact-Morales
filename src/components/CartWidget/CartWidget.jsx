import React from 'react'
import Cart from  '../../Assets/shopping-cart.png'
import './CartWidget.scss';

export default function CartWidget() {
  return (
    <div>
      <img className='cartWidget' src={Cart} alt="carrito" />
    </div>
  )
}
