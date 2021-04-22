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
  <input type={type} name={name} autoComplete='false' ref={Ref} className={`input ${className||''}`} style={style} {...rest}/>
 )
}

export default Input
