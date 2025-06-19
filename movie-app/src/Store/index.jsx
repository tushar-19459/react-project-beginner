import { configureStore } from "@reduxjs/toolkit";
import FavoritesSlice from './favorites/FavoritesSlice'
const FavStore = configureStore({
    reducer: FavoritesSlice
})

export default FavStore