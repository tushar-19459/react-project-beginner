import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = []

const FavoritesSlice = createSlice({
    name: 'favorit',
    initialState,
    reducers: {
        addtoFav(state, action) {
            let data = [...state]
            let check = data.some((item)=>item.id===action.payload.id)
            if(check){
                data = data.filter((item)=>item.id !== action.payload.id )
                return data
            }else{
                data.push(action.payload)
            }
            return data
        },
        removeFromFav(state, action) {

        },
    }
})

export const { addtoFav, removeFromFav } = FavoritesSlice.actions
export default FavoritesSlice.reducer