import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const cartslice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push({ ...action.payload, quantity: 1 })
        },
        removeFromCart(state, action) {
            let updateddata = state.filter((item) =>
                item.id != action.payload
            )
            console.log(action.payload.id)
            console.log(updateddata)
            return updateddata
        },
        updateQuantity(state,action){
            const {id,quantity} = action.payload
            let item = state.find(item=>item.id === id)
            if(item && quantity!==0){
                item.quantity=quantity
                console.log("count updated")
            }
        }
    }
})

export const { addToCart, removeFromCart, updateQuantity } = cartslice.actions
export default cartslice.reducer