import React from 'react'

const Categories = () => (
  <main className="page-shell categories-page">
    <section className="categories-intro">
      <span className="eyebrow">EXPLORE SHOPKART</span>
      <h1>Find your next <span>favourite.</span></h1>
      <p>A little collection of everything you need, and a few things you’ll simply love.</p>
    </section>

    <section className="featured-category">
      <div className="featured-category-copy"><span className="eyebrow">FEATURED THIS WEEK</span><h2>Fresh home, fresh mood.</h2><p>Small touches that turn your space into your favourite place.</p><span className="category-link">Explore home & living →</span></div>
      <div className="featured-category-art" aria-hidden="true"><span>🪴</span><span>🛋️</span><span>🕯️</span></div>
    </section>

    <section className="all-categories">
      <div className="section-heading"><div><span className="eyebrow">BROWSE ALL</span><h2>Pick a place to start.</h2></div><span className="category-count">8 collections</span></div>
      <div className="category-list-grid">
        <article className="list-category-card fashion-card"><span className="list-icon">👟</span><div><h3>Fashion</h3><p>Everyday looks, your way</p></div><b>01</b></article>
        <article className="list-category-card electronics-card"><span className="list-icon">🎧</span><div><h3>Electronics</h3><p>Smart picks for modern life</p></div><b>02</b></article>
        <article className="list-category-card home-card"><span className="list-icon">🪴</span><div><h3>Home & Living</h3><p>Comfort for every corner</p></div><b>03</b></article>
        <article className="list-category-card beauty-card"><span className="list-icon">🧴</span><div><h3>Beauty & Care</h3><p>Your feel-good essentials</p></div><b>04</b></article>
        <article className="list-category-card grocery-card"><span className="list-icon">🍎</span><div><h3>Daily Essentials</h3><p>The little things, sorted</p></div><b>05</b></article>
        <article className="list-category-card kids-card"><span className="list-icon">🧸</span><div><h3>Kids & Toys</h3><p>Big smiles in every box</p></div><b>06</b></article>
        <article className="list-category-card fitness-card"><span className="list-icon">🏋️</span><div><h3>Sports & Fitness</h3><p>Made to keep you moving</p></div><b>07</b></article>
        <article className="list-category-card books-card"><span className="list-icon">📚</span><div><h3>Books & More</h3><p>Stories worth staying for</p></div><b>08</b></article>
      </div>
    </section>
  </main>
)

export default Categories
