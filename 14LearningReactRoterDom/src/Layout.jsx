import React from 'react'
import { Outlet } from 'react-router'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
const Layout = () => {
  return (

<>
     <Header/>
     <Outlet/>
     <Footer/>

</>
  )
}

export default Layout