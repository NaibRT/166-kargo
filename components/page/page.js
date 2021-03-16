import React from 'react'

function Page({children,style,className}) {
 return (
  <div className={`page ${className||''}`} style={style}>
    <div className='container-fluid'>
      {children}
    </div>
  </div>
 )
}

export default Page
