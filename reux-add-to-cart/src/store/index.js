import { configureStore } from "@reduxjs/toolkit";
import  cartslice  from "./store-slice/cart-slice";

const cartstore = configureStore({
    reducer:{
        cart:cartslice
    }
})

export default cartstore