import { useDispatch } from "react-redux";
import { addItem } from "../redux/slice";

function Product() {

    const dispatch=useDispatch()
  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          height: "180px",
          backgroundColor: "#e5e7eb",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "60px",
        }}
      >
        👟
      </div>

      <h2
        style={{
          fontSize: "20px",
          margin: "15px 0 8px",
        }}
      >
        Running Shoes
      </h2>

      <p
        style={{
          color: "#777",
          margin: "5px 0",
        }}
      >
        Comfortable sports shoes
      </p>

      <h3
        style={{
          color: "#2563eb",
          margin: "10px 0",
        }}
      >
        ₹1,999
      </h3>

      <button
      onClick={()=>{dispatch(addItem(1))}}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;