import React from 'react';

const  ButtonComponent = ({label, startElement, endElement, className, style, ...rest})=>{
    
    return(
        <button className ={`btn ${className||''}`} style={style} {...rest} >
            {startElement}
            {label}
            {endElement}
        </button>
    );
}

export default ButtonComponent; 
