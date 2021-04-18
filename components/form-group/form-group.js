import React from 'react'

function FromGroup(
 {
  label,
  labelStartIcon,
  children,
  error,
  className,
  bodyClass,
  bodyStyle,
  style,
 }) {

 return (
  <div className={`form-group ${className||''}`} style={style||{}} >
    { label &&
   <div className='txt-lbl-container mb-xxs'>
    <label className='txt-lbl '>{label}</label>
    {labelStartIcon}
   </div>
    }
    <div className={`form-group-body ${bodyClass||''}`} style={bodyStyle}>
    {children}
    </div>
    {
     error && <label style={{ fontSize:'11px'}}  className='err-lbl'>{error}</label>
    }
  </div>
 )

}

export async function getStaticProps({locale}) {
  console.log('worked')
   return {
     props: {
     },
   }
 
 }

export default FromGroup
