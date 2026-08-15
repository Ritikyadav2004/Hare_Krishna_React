import React, { useState } from 'react'


// Step A: Component Function
// Props me se hum 4 cheezein DESTRUCTURING karke nikal rahe hain:
// 1. items: Cart ke items (Subtotal calculate karne ke liye)
// 2. discount: Reducer state se mila hua discount ($10)
// 3. promoCode: Apply kiya gaya promo code ka naam ('SAVE10')
// 4. dispatch: Reducer ko actions bhejne wala function
const Summery = ({ items, discount, promoCode, dispatch }) => {
// Step B: Local State (Sirf input box me type hone wale text ko store karne ke liye useState)
  const [inputCode, setInputCode] = useState('');

  // Step C: Subtotal Calculation (Derived State)
  // .reduce() array ke saare items ke (price * quantity) ko aapas me jod deta hai.
  // sum ki starting value 0 hai.
  const subtotal = items.reduce(function(sum, item) {
    return sum + (item.price * item.quantity);
  }, 0);


  // Step D: Final Total Calculation
  // Math.max(0, ...) isliye lagaya hai taaki agar discount subtotal se bada ho jaye, 
  // toh total kabhi negative (-ve) na dikhe (kam se kam $0 rahe).
  const total = Math.max(0, subtotal - (subtotal * discount)/100);


  // Step E: Promo Code Submit Handler Function
  function handleApplyPromo() {
    // Reducer ko 'APPLY_PROMO' action dispatch kar rahe hain
    // payload me user ka type kiya hua text (inputCode) bhej rahe hain
    dispatch({
      type: 'APPLY_PROMO',
      payload: inputCode
    });
    // Code apply hone ke baad input box ko wapas khali kar dete hain
    setInputCode('');
  }
  
  return (
    <div
      style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}
    >
      {/* Heading */}
      <h3>💳 Bill Summary</h3>

      {/* Step F: Promo Code Input Section */}
      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Promo code dalein ('SAVE10')"
          value={inputCode}
          onChange={function(e) {
            // User jo type karega, use local state me set karenge
            setInputCode(e.target.value);
          }}
          style={{
            padding: '8px',
            marginRight: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />

        <button
          onClick={handleApplyPromo}
          style={{
            padding: '8px 14px',
            backgroundColor: '#17a2b8',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Apply
        </button>
      </div>

      {/* Step G: Bill Details */}
      <p style={{ margin: '6px 0' }}>
        Subtotal: <strong>${subtotal}</strong>
      </p>

      {/* 
        Agar discount 0 se bada hai, tabhi ye discount wali line screen par dikhegi.
        Is pattern ko JavaScript me Short-Circuit Evaluation (&&) kehte hain.
      */}
      {discount > 0 && (
        <p style={{ margin: '6px 0', color: 'green' }}>
          Discount Applied ({promoCode}): <strong>-${discount}</strong>
        </p>
      )}

      <h2 style={{ color: '#333', marginTop: '10px' }}>
        Total Pay: ${total}
      </h2>

      {/* 
        Step H: Clear Cart Button
        Jab user is button par click karega:
        - action.type = 'CLEAR_CART' dispatch hoga
        - Reducer cart ko wapas initial state (khali) kar dega
      */}
      <button
        onClick={function() {
          dispatch({
            type: 'CLEAR_CART'
          });
        }}
        style={{
          marginTop: '10px',
          padding: '8px 16px',
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Clear Cart
      </button>
    </div>
  );
}

export default Summery