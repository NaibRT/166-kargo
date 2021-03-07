import React from 'react'
import Divider from '../divider/divider'


function RateItem({itemData = {}}){

 return (
  <>
  <div className='rate-item'>
   <span>{itemData?.min} - {itemData?.max} kq</span>
   <span>{itemData?.amount} $</span>
  </div>
  <Divider/>
  </>
 )
}


function Rate({data = [],icon,headerText}) {
 return (
  <div className='rate'>
      <div className='rate-header'>
        <img src={icon}/>
        <b>{headerText}</b>  
  </div>

     <div className='rate-body'>
      {
       data.map((x,i) => (
         <RateItem key={i} itemData={x}/>
       ))
      }   
     </div>
  </div>
 )
}

export default Rate
