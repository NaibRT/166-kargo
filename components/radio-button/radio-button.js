import React from 'react'

function RadioButton({text,name,id,value,rest}) {
 return (
  <>
   <input className='radio-btn' name={name} type="radio" id={id} value={value} {...rest} />
   <label className='radio-btn-lbl' for={id}>{text}</label>
  </>
 )
}

export default RadioButton
