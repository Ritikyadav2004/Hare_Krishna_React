function AddToCart() {
  

  return (
    <div
      style={{
        width: "80%",
        maxWidth: "900px",
        margin: "40px auto",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "30px",
          marginBottom: "25px",
        }}
      >
        Shopping Cart
      </h1>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        {/* Product Information */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#e5e7eb",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
            }}
          >
            👟
          </div>

          <div>
            <h2
              style={{
                fontSize: "18px",
                marginBottom: "8px",
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
              Size: 9
            </p>
          </div>
        </div>

        {/* Quantity */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <button
            style={{
              width: "30px",
              height: "30px",
              border: "1px solid #ddd",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          >
            -
          </button>

          <span
            style={{
              fontWeight: "bold",
            }}
          >
            1
          </span>

          <button
            style={{
              width: "30px",
              height: "30px",
              border: "1px solid #ddd",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          >
            +
          </button>
        </div>

        {/* Price */}
        <h3
          style={{
            fontSize: "18px",
          }}
        >
          ₹1,999
        </h3>

        {/* Remove */}
        <button
          style={{
            color: "#ef4444",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default AddToCart;