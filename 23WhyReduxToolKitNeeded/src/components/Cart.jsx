import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearAllItem } from "../redux/slice.js";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartSelector = useSelector((state) => state.cart.items);
  const [cartItem, setCartItem] = useState(cartSelector);

// to ensure that the cartItem state is updated whenever the cartSelector changes, we can use the useEffect hook. This will help keep the local state in sync with the Redux store.
useEffect(()=>{
  setCartItem(cartSelector);
},[cartSelector])

  const quantity = cartItem.length;

  const totalAmount = cartItem.reduce(
    (sum, item) => sum + Number(item.price || 0) * (Number(item.quantity) || 1),
    0
  );

  const manageQuantity = (id, q) => {
    const updatedQuantity = Number(q) > 0 ? Number(q) : 1;

    const cartTemplate = cartItem.map((item) =>
      item.id === id ? { ...item, quantity: updatedQuantity } : item
    );

    setCartItem(cartTemplate);
    // console.log("updated cart item:", cartTemplate.find((item) => item.id === id));
  };

 const handlePlaceOrder=()=>{
  localStorage.removeItem('cart');
  dispatch(clearAllItem());
  setCartItem([]);
  alert('Order placed successfully!');
  navigate('/');
 }

  return (
    <div
      style={{
        width: "80%",
        maxWidth: "1000px",
        margin: "40px auto",
        backgroundColor: "#f8fafc",
        padding: "24px",
        borderRadius: "16px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
          gap: "16px",
        }}
      >
        <h1 style={{ fontSize: "30px", margin: 0 }}>Shopping Cart</h1>

        <button
          onClick={() => dispatch(clearAllItem())}
          style={{
            color: "#ef4444",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "15px",
          }}
        >
          Clear Cart
        </button>
      </div>

      {cartItem.length === 0 ? (
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "30px",
            textAlign: "center",
            color: "#666",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          Your cart is empty.
        </div>
      ) : (
        <div style={{ display: "grid", gap: "16px" }}>
          {cartItem.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "white",
                padding: "18px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    width: "110px",
                    height: "110px",
                    backgroundColor: "#e5e7eb",
                    borderRadius: "10px",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      fontSize: "20px",
                      margin: "0 0 8px",
                    }}
                  >
                    {item.title}
                  </h2>
                  <p
                    style={{
                      color: "#666",
                      margin: "0 0 8px",
                      textTransform: "capitalize",
                    }}
                  >
                    {item.brand}
                  </p>
                <p style={{ margin: 0, color: "#111827", fontWeight: "700", fontSize: "18px" }}>
                  ${(Number(item.price || 0) * (Number(item.quantity) || 1)).toLocaleString("en-IN")}
                </p>
                
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "10px",
                  flexShrink: 0,
                }}
              >
                
                <div style={{display:'flex'}}>
                  <div >
                    
                    <input
                      value={item.quantity || 1}
                      onChange={(e) => manageQuantity(item.id, e.target.value)}
                      name="quantity"
                      type="number"
                      min="1"
                      placeholder="Quantity"
                      style={{ width: "80px", padding: "8px 10px", borderRadius: "8px", border: "1px solid #d1d5db" }}
                    />
                  </div>
                  <div>
                    <button
                  onClick={() => dispatch(removeItem(item))}
                  style={{
                    padding: "10px 14px",
                    border: "1px solid rgba(239, 68, 68, 0.25)",
                    background: "linear-gradient(135deg, #fff1f2, #ffe4e6)",
                    borderRadius: "999px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#b91c1c",
                    letterSpacing: "0.2px",
                    transition: "all 0.2s ease",
                    boxShadow: "0 6px 16px rgba(239, 68, 68, 0.12)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#fee2e2";
                    e.target.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "linear-gradient(135deg, #fff1f2, #ffe4e6)";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Remove
                </button>
                  </div>
                </div>

                {/* <button
                  onClick={() => dispatch(addItem(item))}
                  style={{
                    width: "32px",
                    height: "32px",
                    border: "1px solid #ddd",
                    backgroundColor: "white",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                >
                  +
                </button> */}
              </div>

            </div>
          ))}
        </div>
      )}

      <div
        style={{
          marginTop: "24px",
          backgroundColor: "#111827",
          color: "white",
          padding: "18px 20px",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
        <span>Total Items: {quantity}</span>
        <strong>Total Amount: ${totalAmount.toLocaleString("en-IN")}</strong>
        <div className="div">
          <button
            onClick={cartItem.length > 0 ? handlePlaceOrder : null}
            style={{
              padding: "12px 22px",
              background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontWeight: "700",
              fontSize: "15px",
              cursor: cartItem.length > 0 ? "pointer" : "not-allowed",
              opacity: cartItem.length > 0 ? 1 : 0.6,
              boxShadow: "0 10px 24px rgba(37, 99, 235, 0.35)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (cartItem.length > 0) {
                e.target.style.transform = "translateY(-1px)";
                e.target.style.boxShadow = "0 14px 28px rgba(37, 99, 235, 0.42)";
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 10px 24px rgba(37, 99, 235, 0.35)";
            }}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;