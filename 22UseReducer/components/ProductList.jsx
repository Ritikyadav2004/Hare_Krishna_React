import React from 'react'
import { PRODUCTS } from '../data/product'

const ProductList = ({dispatch}) => {
    // Step B: Component Function
// Humne props me se 'dispatch' ko DESTRUCTURING karke nikal liya hai.
// Iska matlab hai: Props object se seedhe dispatch function mil gaya.


  return (
    <div>
        <div style={{marginBottom:'20px'}}>

            <h2>Store Products</h2>
            <div style={{display:'flex',gap:'20px'}}>
                {/* Step C: PRODUCTS array par .map() chala kar 
                har item ke liye Card bana rahe hain */}

                {PRODUCTS.map((pdt)=>{
                    // yaha pdt se properties ko destructre krke nikal rhe he 

                    const {id,name , price , image}=pdt;

                    return(
                    <div 
                    key={id}  key={id} // React ko har item pehchanne ke liye unique 'key' chahiye hoti hai
                     style={{border:'1px solid black',padding:'10px',width:'200px'}}>
                   {/* Product ka naam aur price dikha rahe hain */}

                    <img src={image} alt={name} style={{width:'100%'}}/>
                    <h3>{name}</h3>
                    <p>Price: ${price}</p>

                    {/* 
                Step D: Main Action Button!
                Jab user is button par click karega:
                1. 'dispatch' function call hoga.
                2. Isme hum Action Object bhej rahe hain:
                   - type: 'ADD_TO_CART' (Reducer ko batayega ki karna kya hai)
                   - payload: product (Reducer ko vo poora product object bhej rahe hain jo add hona hai)
              */}

              <button onClick={()=>{
                dispatch({
                    type:'ADD_TO_CART',
                    payload:pdt
                })
              }}
              style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>

            Add to Cart
              </button>
                    
                    </div>

                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default ProductList