import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: ({
        addItemsToCart(state, action) {
            state.push({ ...action.payload, count: 1 })
        },
        removeItemsFromCart(state, action) {

            const updated = state.filter((item) =>
                item.id !== action.payload
            )
            return updated
        },
        updateItemCount(state, action) {
            const {id,count} = action.payload
            const storeitem = state.find((item)=>
                id===item.id
            ) 
            if(count>0){
                storeitem.count = count
            }
        },
    })
})

export const { addItemsToCart, removeItemsFromCart, updateItemCount } = cartSlice.actions
export default cartSlice.reducer