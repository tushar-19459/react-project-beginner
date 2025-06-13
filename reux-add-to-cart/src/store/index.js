import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./store-slice/cart-slice";

const store = configureStore({
    reducer: {
        cart: cartslice
    }
})
export default store