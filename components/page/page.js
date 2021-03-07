import React from 'react'

function Page({children}) {
 return (
  <div className='page'>
    <div className='container-fluid'>
      {children}
    </div>
  </div>
 )
}

export default Page
