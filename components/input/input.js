import React from 'react'

function Input({
                className,
                style,
                type,
                name,
                Ref,
                ...rest
               }) {
 return (
  <input type={type} name={name} autoComplete='false' ref={Ref} {...rest} className={`input ${className||''}`} style={style}/>
 )
}

export default Input
