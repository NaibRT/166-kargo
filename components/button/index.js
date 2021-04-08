import React from 'react';

const  ButtonComponent = ({label, startElement, endElement, className, style,Ref, ...rest})=>{
    
    return(
        <button className ={`btn ${className||''}`} style={style} ref={Ref} {...rest} >
            {startElement}
            {label}
            {endElement}
        </button>
    );
}

export default ButtonComponent; 
