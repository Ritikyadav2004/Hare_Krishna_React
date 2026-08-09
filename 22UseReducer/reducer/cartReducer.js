export const initialState={
     items:[],  //Cart me starting me koi item nahi hoga (Empty Array)
    discount:0,  // Starting me discount 0 dollar hoga
    promoCode:'' , // Starting me koi promo code apply nahi hoga
}

export function cartReducer(state,action){
    switch(action.type)
    {
        case 'ADD_TO_CARTT':{
            const productToAdd=action.payload;

            // checking item pahale se cart me hai ya nahi
            const existingItem=state.items.find((item)=>{
                return item.id===productToAdd.id;4

            })

            if(existingItem)
            {
                const updatedItems = state.items.map((item)=>{
                    if(item.id==productToAdd.id)
                    {
                        return{
                            id:item.id,
                            name:item.name,
                            quantity:item.quantity+1,
                            price:item.price
                        }
                    }

                    return item;
                });



                return {
                    items: updatedItems,
                    discount:state.discount,
                    promoCode:state.promoCode

                }
            }
            
            // AGAER ITEM CART ME NAHI HAI TOH USKO ADD KAR DO
            else{
          const newItem={
            id:productToAdd.id,
            name:productToAdd.name,
            quantity:1,
            price:productToAdd.price
          };


          return {
            items:[...state.items,newItem],
            discount:state.discount,
            promoCode:state.promoCode
          }
            }
        }


    case 'UPDATE_ITEM_QUANTITY':{
        const productId=action.payload.productId;
        const delta=action.payload.delta


        const updatedItems= state.items.map((item)=>{
  if(item.id==productId)
  {
    return {
        id:item.id,
        name:item.name,
        price:item.price,
        quantity:item.quantity + delta
    
    }
  }

  return item;
        }).filter((item)=>{
            return item.quantity>0;
        })



        return{
            items:updatedItems,
            discount:state.discount,
            promoCode:state.promoCode
        }

    }
// // CASE 3: Promo code apply karna
    case 'APPLY_PROMO':{
 const code=action.payload

 if(code==='SAVE10')
 {
    return {
        items:state.item,
        discount:state.discount,
        promoCode:state.promoCode
    };
 }

 return state; // if promo code is wrong
    }

    // cart poora  khali  he 
    case 'CLEAR_CART':{
        return{
            items:[],
            discount:0,
            promoCode:''
        }
    }


    default:{
        return state;
    }
}

}