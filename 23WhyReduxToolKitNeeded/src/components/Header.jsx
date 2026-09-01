import React from 'react'
// import AddToCart from './AddToCart.jsx'
import { Link, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
function Header() {
  const cartItems=useSelector((state)=>state.cart.items)

  const navigate =useNavigate();
  
  const linkStyle = {
    textDecoration: "none",
    color: "#444",
    fontSize: "16px",
    fontWeight: "500",
    transition: "all 0.3s ease",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const handleLinkHover = (e, isHover) => {
    if (isHover) {
      e.target.style.color = "#2563eb";
      e.target.style.backgroundColor = "#f0f4ff";
      e.target.style.transform = "translateY(-2px)";
    } else {
      e.target.style.color = "#444";
      e.target.style.backgroundColor = "transparent";
      e.target.style.transform = "translateY(0)";
    }
  };

  return (
    <header
      style={{
        height: "90px",
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 10%",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#2563eb",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          🛍️
        </div>
        <h2
          style={{
            color: "#2563eb",
            fontSize: "28px",
            fontWeight: "700",
            margin: 0,
            letterSpacing: "-0.5px",
          }}
        >
          ShopKart
        </h2>
      </div>

      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={(e) => handleLinkHover(e, true)}
          onMouseLeave={(e) => handleLinkHover(e, false)}
        >
          🏠 Home
        </Link>

        <Link
          to="/products"
          style={linkStyle}
          onMouseEnter={(e) => handleLinkHover(e, true)}
          onMouseLeave={(e) => handleLinkHover(e, false)}
        >
          📦 Products
        </Link>

        <Link
          to="/about"
          style={linkStyle}
          onMouseEnter={(e) => handleLinkHover(e, true)}
          onMouseLeave={(e) => handleLinkHover(e, false)}
        >
          ℹ️ About
        </Link>

        <Link
          to="/contact"
          style={linkStyle}
          onMouseEnter={(e) => handleLinkHover(e, true)}
          onMouseLeave={(e) => handleLinkHover(e, false)}
        >
          📧 Contact
        </Link>
      </nav>

      {/* Cart Button */}
      <button onClick={()=>navigate('/cart')}

        style={{
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "600",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#1d4ed8";
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 6px 16px rgba(37, 99, 235, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#2563eb";
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.3)";
        }}
      >
        🛒 Cart
        <span
          style={{
            backgroundColor: "#dc2626",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {cartItems.length?cartItems.length:0}
        </span>
        {/* {button && <AddToCart/>} */}
      </button>
    </header>
  );
}

export default Header;