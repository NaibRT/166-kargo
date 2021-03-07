import React from 'react';

const  ButtonComponent = ({label, startElement, endElement})=>{
    
    return(
        <button className = 'btn'>{startElement}{label}{endElement}</button>
    );
}

export default ButtonComponent; 
