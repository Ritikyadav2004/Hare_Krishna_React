import { createSlice } from "@reduxjs/toolkit";

const intialState={
    // value:0 // this refer to Count at the cart
    items:[] // now we will see the details of produt in the cart which is already added
}

const addToCartSlice=createSlice({
    name:'cart',
    initialState:intialState,
    reducers:{
        addItem:(state,action)=>{
            // state.value+=1
            // console.log(action);
            state.items.push(action.payload)
        },
        removeItem:(state)=>{
            if (state.value > 0) {
                state.value -= 1
            }
        },
        clearAllItem:(state)=>{
            state.value=0
        }
}})

export const { addItem, removeItem , clearAllItem} = addToCartSlice.actions
export default addToCartSlice.reducer
