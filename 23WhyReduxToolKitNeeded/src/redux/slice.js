import { createSlice } from "@reduxjs/toolkit";

const intialState={
    value:0
}

const addToCartSlice=createSlice({
    name:'cart',
    initialState:intialState,
    reducers:{
        addItem:(state)=>{
            state.value+=1
        }
}})

export const {addItem}=addToCartSlice.actions
export default addToCartSlice.reducer