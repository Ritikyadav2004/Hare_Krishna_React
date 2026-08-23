import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slice";
import { fetchProducts } from "../redux/productSlice";

function Product() {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    // StrictMode/development re-render ke baad unnecessary request se bachata hai.
    if (status === "idle") dispatch(fetchProducts());
  }, [dispatch, status]);

  return (
    <main className="products-page">
      <section className="products-hero" aria-labelledby="products-title">
        <p className="eyebrow">CURATED FOR YOU</p>
        <h1 id="products-title">Find your next favourite.</h1>
        <p>Fresh products, real API data, and a smooth shopping experience.</p>
        {status === "succeeded" && <span className="product-count">{products.length} products available</span>}
      </section>

      {status === "loading" && <div className="product-state" role="status"><span className="loader" aria-hidden="true" />Loading products...</div>}
      {status === "failed" && <div className="product-state product-state--error" role="alert"><p>Products could not be loaded. {error}</p><button className="primary-ui-button" onClick={() => dispatch(fetchProducts())}>Try again</button></div>}
      {status === "succeeded" && products.length === 0 && <div className="product-state">No products found right now.</div>}

      {status === "succeeded" && products.length > 0 && (
        <section className="product-grid" aria-label="Product list">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image-wrap">
                <img className="product-image" src={product.thumbnail} alt={product.title} />
                {product.discountPercentage > 0 && <span className="discount-badge">-{Math.round(product.discountPercentage)}%</span>}
              </div>
              <div className="product-content">
                <p className="product-category">{product.category}</p>
                <h2 title={product.title}>{product.title}</h2>
                <div className="product-meta"><span className="rating" aria-label={`${product.rating} out of 5 stars`}>★ {product.rating}</span><span className="stock">{product.stock > 0 ? "In stock" : "Out of stock"}</span></div>
                <div className="product-footer"><strong>${product.price}</strong><button className="add-cart-button" onClick={() => dispatch(addItem())} disabled={product.stock === 0}>{product.stock > 0 ? "Add to cart" : "Sold out"}</button></div>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default Product;
