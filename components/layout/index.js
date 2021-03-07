import React from 'react'
import Footer from '../footer/Footer'
import Header from '../Navbar'

function Layout({children}) {
 return (
  <div>
   <Header/>
   {children}
   <Footer/>
  </div>
 )
}

export default Layout
