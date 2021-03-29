import React from 'react'
import Divider from '../divider/divider'


function RateItem({itemData = {}}){

 return (
  <React.Fragment>
  <div className='rate-item'>
   <span>{itemData?.weight_min} - {itemData?.weight_max} kq</span>
   <span>{itemData?.price} $ </span>
  </div>
  </React.Fragment>
 )
}


function Rate({data = [],icon,headerText,style}) {
 return (
  <div className='rate' style={style}>
      <div className='rate-header'>
        <img src={icon}/>
        <span>{headerText}</span>  
  </div>

     <div className='rate-body'>
      {
       data.map((x,i) => (
         <>
         <RateItem key={i} itemData={x}/>
           {
           (data.length-1)!==i ?
             <Divider/>  : null
           }
         </>
       ))
      }   
     </div>
  </div>
 )
}

export default Rate
