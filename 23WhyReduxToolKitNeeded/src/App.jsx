import React from 'react'
import Header from './components/Header.jsx'
import AddToCart from './components/AddToCart.jsx'
import Product from './components/Product.jsx'
const App = () => {
  return (
    <div>
      <Header />
      <Product/>
      {/* <AddToCart/>  */}
    </div>
  )
}

export default App