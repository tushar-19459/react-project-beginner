import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const cartslice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers: {
            addtoc(state, action) {
                state = [...state,action.payload]
                console.log(state)
                return state
            },
        }
    }
)

export const { addtoc } = cartslice.actions
export default cartslice.reducer