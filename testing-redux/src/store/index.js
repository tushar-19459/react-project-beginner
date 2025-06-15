import { configureStore } from "@reduxjs/toolkit";
import  CartReducer  from './cart-slice/cartslice'
const storeCart = configureStore({
    reducer: {
        cart: CartReducer
    }
})
export default storeCart