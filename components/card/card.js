import React from 'react';

export default function Card({children,className,style}){
 return (
  <div className={`card mb-lg ${className}`} style={style}>
    {children}
  </div>
 )
}

Card.Header = ({startElement,endElelment,text, style}) => (
 <div className={'cardHeader'} style={style}>
   {startElement}
   <h3 className={'cardHeaderText'}>{text}</h3>
   {endElelment}
 </div>
);

Card.Body = ({
             children, 
             className,
             style
            }) => (
   <div  className={`card-body ${className}`} style={style}>
     {children}
   </div>
 );

 Card.Footer = ({children,className,style}) => (
  <div className={`card-footer ${className}`} style={style}>
   {children}
  </div>
 )
