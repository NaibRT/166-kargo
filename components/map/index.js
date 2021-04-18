import React from 'react'

function Map(props) {
    return (
        <div>        
        <iframe 
               src={props.src} 
               height={props.height} 
               width={props.width}
               style={props.style}
               loading='lazy'
               />         
        </div>
    )
}

export default Map