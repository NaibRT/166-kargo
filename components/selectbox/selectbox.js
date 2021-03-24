import React from 'react'

function Selectbox({name,id,data=[],className,style,Ref,...rest}) {
 return (
  <select className={`select-box ${className||''}`} style={style} name={name} id={id} ref={Ref} {...rest}>
     {
      data.map((option,index) => (
       <option value={option} key={index}>{option}</option>
      ))
     }
  </select>
 )
}

export default Selectbox
