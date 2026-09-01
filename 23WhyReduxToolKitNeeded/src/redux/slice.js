import { createSlice } from "@reduxjs/toolkit";

const initialState={
    // value:0 // this refer to Count at the cart
    // items:[] // now we will see the details of produt in the cart which is already added
    items:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
}

const addToCartSlice=createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
            localStorage.setItem('cart',JSON.stringify(state.items))
        },
        removeItem:(state,action)=>{
           const cartData=state.items.filter(item=>item.id!==action.payload.id);
           state.items=cartData;
           localStorage.setItem('cart',JSON.stringify(cartData))
        },
        clearAllItem:(state)=>{
            state.items=[];
            localStorage.setItem('cart', JSON.stringify([]));
        }
}})

export const { addItem, removeItem , clearAllItem} = addToCartSlice.actions
export default addToCartSlice.reducer
