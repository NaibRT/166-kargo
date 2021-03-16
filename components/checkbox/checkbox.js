import React from 'react'

function Checkbox({children,className,style,text,...rest}) {
    return (
        <div className='checkbox-container'>
        <label className ={`checkbox ${className||''}`} style={style}>
            <input className='checkbox_input' type='checkbox' {...rest} />
            <span></span>
        </label>
        {text && <small>{text}</small>}
        {children}
        </div>
    )
}

export default Checkbox
