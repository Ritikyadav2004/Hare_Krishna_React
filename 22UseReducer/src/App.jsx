import React, { useReducer } from 'react';

// Step A: Reducer function aur Initial state ko import kar rahe hain
import { cartReducer, initialState } from  '../reducer/cartReducer.js';

// Step B: Teeno UI components ko import kar rahe hain
import ProductList from '../components/ProductList.jsx';
import Cart from '../components/Cart.jsx';
import Summary from '../components/Summery.jsx';

const App=()=>{

  // Step C: useReducer Hook ko initialize kar rahe hain
  // 1. cartReducer: Wo function jisme state change karne ke rules hain.
  // 2. initialState: Cart ka shuruati data ({ items: [], discount: 0, promoCode: '' }).
  // 
  // Yeh hook hume 2 cheezein return karta hai:
  // - state: Cart ka abhi ka data.
  // - dispatch: Wo trigger function jisse hum actions bhejte hain.
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return(
<div
      style={{
        maxWidth: '750px',
        margin: '30px auto',
        padding: '20px',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '12px',
        backgroundColor: '#ffffff'
      }}
    >
      {/* App Header */}
      <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '5px' }}>
        🛒 React useReducer Store
      </h1>
      <p style={{ textAlign: 'center', color: '#7f8c8d', marginTop: 0 }}>
        Beginner Friendly Step-by-Step Shopping Cart
      </p>
      
      <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '20px 0' }} />

      {/* 
        Step D: ProductList Component
        Is component ko sirf 'dispatch' function chahiye taaki jab user 'Add to Cart' 
        par click kare toh wo action bhej sake.
      */}
      <ProductList dispatch={dispatch} />

      <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '20px 0' }} />

      {/* 
        Step E: Cart Component
        Is component ko:
        1. state.items chahiye (Cart ke items ki list render karne ke liye).
        2. dispatch chahiye (+ aur - buttons se quantity badhane/ghatane ke liye).
      */}
      <Cart 
        items={state.items} 
        dispatch={dispatch} 
      />

      <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '20px 0' }} />

      {/* 
        Step F: Summary Component
        Is component ko:
        1. items: Subtotal nikalne ke liye (items array).
        2. discount: Reducer state me kitna discount apply hua hai ($10).
        3. promoCode: Konsa promo code apply hua hai ('SAVE10').
        4. dispatch: Promo apply karne aur Clear Cart button trigger karne ke liye.
      */}
      <Summary 
        items={state.items}
        discount={state.discount}
        promoCode={state.promoCode}
        dispatch={dispatch}
      />

    </div>
  );
  
}


export default App;   // hare krishna