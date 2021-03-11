import React from 'react'

function Input({
                className,
                style,
                type,
                name,
                ref,
                ...rest
               }) {
 return (
  <input type={type} name={name} ref={ref} {...rest} className={`input ${className||''}`} style={style}/>
 )
}

export default Input
