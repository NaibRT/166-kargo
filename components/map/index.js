import React from 'react'

function Frame({src,height,width,style,...rest}) {
    return (
        <div>        
        <iframe 
               src={src} 
               height={height} 
               width={width}
               style={style}
               loading='lazy'
               {...rest}
               />         
        </div>
    )
}

export default Frame