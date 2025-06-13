import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cartbilling from '../components/Cartbilling';
import Emptycart from '../components/Emptycart';
const Cart = () => {
  const cartItems = useSelector(state => state.cart)
  if (cartItems.length === 0) {
    return <Emptycart></Emptycart>
  }
  return (
    <>
      {cartItems && cartItems.length > 0 &&
        <Cartbilling></Cartbilling>
      }
    </>
  );
};
export default Cart;