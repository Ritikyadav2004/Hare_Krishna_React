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
        },
        removeItem:(state)=>{
            state.value>0? state.value-=1:null
        },
        clearAllItem:(state)=>{
            state.value=0
        }
}})

export const { addItem, removeItem , clearAllItem} = addToCartSlice.actions
export default addToCartSlice.reducer