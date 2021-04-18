import React from 'react'
import Footer from '../footer/Footer'
import Header from '../Navbar'

function Layout({children}) {
    let height = screen.height;
 return (
  <div style={{height:`${height}px`}}>
   <Header/>
   {children}
   <Footer/>
  </div>
 )
}

export default Layout
