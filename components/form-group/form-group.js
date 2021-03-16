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
   <div className='txt-lbl-container'>
   <label className='txt-lbl'>{label}</label>
    {labelStartIcon}
   </div>
    <div className={`form-group-body ${bodyClass||''}`} style={bodyStyle}>
    {children}
    </div>
    {
     error && <label className='err-lbl'>{error}</label>
    }
  </div>
 )

}

export default FromGroup
