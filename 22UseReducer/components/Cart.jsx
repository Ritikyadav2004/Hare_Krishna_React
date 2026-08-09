import React from 'react'

const Cart = ({ items = [], dispatch }) => {

  return (
    <div style={{ marginBottom: '20px' }}>

        {/* Heading */}
        <h2>Your Cart</h2>
        {/* 
        Step B: Conditional Rendering
        Agar items array ki length 0 hai (mtlb cart khali hai), 
        to "Cart khali hai" message dikhao.
        Warna items ki list render karo.
      */}

      {items.length===0 ?(
        <p style={{ color: '#666', fontStyle: 'italic' }}>Your cart is empty.</p>
      ) :(
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {/* Step C: items array par .map() chala kar har item ki row bana rahe hain */}

          {items.map((item)=>{
            // Item object se properties ko DESTRUCTURING kar rahe hain

            const {id,name,price,quantity}=item;
            return(
                <li key={id} // Unique key React ke liye
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '10px',
                  borderBottom: '1px solid #eee'
                }}> 
             {/* Item name, single item price, aur quantity */}
                <span style={{ minWidth: '180px', fontWeight: 'bold' }}>
                  {name}
                </span>

                <span>
                  ${price} x {quantity} = <strong>${price * quantity}</strong>
                </span>

                {/* 
                  Step D: Quantity Badhane ka Button (+)
                  Jab user '+' dabata hai:
                  - dispatch function run hoga.
                  - action.type = 'UPDATE_QUANTITY'
                  - action.payload = { id: id, delta: 1 }  (delta +1 ka matlab hai 1 quantity badhao)
                */}

                <button
                
                onClick={()=>{
                    dispatch({
                        type:'UPDATE_QUANTITY',
                        payload:{id:id,delta:1}
                    })
                }} style={{
                    padding: '4px 10px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }} >

                    +
                </button>

                {/* 
                  Step E: Quantity Ghatane ka Button (-)
                  Jab user '-' dabata hai:
                  - dispatch function run hoga.
                  - action.type = 'UPDATE_QUANTITY'
                  - action.payload = { id: id, delta: -1 } (delta -1 ka matlab hai 1 quantity kam karo)
                  - Note: Agar quantity 1 se 0 hogi, to reducer isey filter karke hatai dega.
                */}


                <button
                onClick={()=>{
                    dispatch({
                        type:'UPDATE_QUANTITY',
                        payload:{id:id,delta:-1}
                    })
                }} style={{
                    padding: '4px 10px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>-</button>
                </li>
            )
          })}
        </ul>
      )}


    </div>
  )
}

export default Cart