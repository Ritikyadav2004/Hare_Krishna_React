import React from "react";
import { useNavigate } from "react-router";
const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="page-shell home-page">
      <section className="hero-section">
        <div className="hero-copy">
            <span className="eyebrow">YOUR EVERYDAY STORE</span>
            <h1>
            Find the little things that make life <span>better.</span>
        </h1>
        <p>
          Discover carefully chosen essentials, fresh styles, and great
          value—all in one friendly place.
        </p>
        <div className="hero-actions">
          <button onClick={()=>navigate('/products')} className="primary-ui-button">
            Shop the collection <span>→</span>
          </button>
          <button onClick={()=>navigate('/categories')} className="text-ui-button">Explore categories</button>
        </div>
        <div className="trust-row">
          <span>
            <b>10k+</b> happy shoppers
          </span>
          <i />
          <span>
            <b>4.9/5</b> customer love
          </span>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="blue-orb orb-one" />
        <div className="blue-orb orb-two" />
        <div className="hero-card main-product-card">
          <span className="product-emoji">🎧</span>
          <small>Just arrived</small>
          <strong>Sound, styled.</strong>
        </div>
        <div className="hero-card mini-product-card">
          <span>⌚</span>
          <b>Smart picks</b>
        </div>
        <div className="hero-badge">
          ★ 4.9
          <br />
          <small>trusted by shoppers</small>
        </div>
      </div>
    </section>
    <section className="category-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">SHOP BY CATEGORY</span>
          <h2>Something for every day.</h2>
        </div>
       <button onClick={()=>navigate('/categories')}> <span className="view-all">View all categories →</span></button>
      </div>
      <div className="category-grid">
        <article className="category-card lavender">
          <span>👟</span>
          <h3>Fashion</h3>
          <p>Fresh looks for you</p>
        </article>
        <article className="category-card peach">
          <span>🎧</span>
          <h3>Electronics</h3>
          <p>Made for modern life</p>
        </article>
        <article className="category-card mint">
          <span>🪴</span>
          <h3>Home & Living</h3>
          <p>Comfort in every corner</p>
        </article>
        <article className="category-card sky">
          <span>🧴</span>
          <h3>Daily Essentials</h3>
          <p>Small things, big help</p>
        </article>
      </div>
    </section>
    <section className="benefit-strip">
      <div>
        <span>🚚</span>
        <p>
          <b>Easy delivery</b>Right to your doorstep
        </p>
      </div>
      <div>
        <span>↺</span>
        <p>
          <b>Simple returns</b>Shop with confidence
        </p>
      </div>
      <div>
        <span>🔒</span>
        <p>
          <b>Secure checkout</b>Your details stay protected
        </p>
      </div>
    </section>
  </main>
   )
};

export default Home;
