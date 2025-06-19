import { configureStore } from "@reduxjs/toolkit";
import FavoritesSlice from './favorites/FavoritesSlice'
const FavStore = configureStore({
    reducer: {
        favorite:FavoritesSlice
    }
})

export default FavStore