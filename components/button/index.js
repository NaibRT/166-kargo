import React from 'react';

const  ButtonComponent = ({label, startElement, endElement, style})=>{
    
    return(
        <button className = 'btn' style={style}>{startElement}{label}{endElement}</button>
    );
}

export default ButtonComponent; 
