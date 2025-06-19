import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = []

const FavoritesSlice = createSlice({
    name: 'favorit',
    initialState,
    reducers: {
        addtoFav(state, action) {

        },
        removeFromFav(state, action) {

        },
    }
})

export const { addtoFav, removeFromFav } = FavoritesSlice.actions
export default FavoritesSlice.reducer