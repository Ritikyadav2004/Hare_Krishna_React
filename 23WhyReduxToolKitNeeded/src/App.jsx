import React from 'react'
import Header from './components/Header.jsx'
import AddToCart from './components/AddToCart.jsx'
import Product from './components/Product.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'  
import { Routes, Route } from "react-router";
import Categories from './components/Categories.jsx'
import Error from './components/Error.jsx'
const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<AddToCart/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </>
  )
}

export default App