import React from 'react'
import Divider from '../divider/divider'


function RateItem({itemData = {}}){

 return (
  <React.Fragment>
  <div className='rate-item'>
 
   <span>{itemData?.min} - {itemData?.max} kq</span>
   <span>{itemData?.amount} $ </span>
   <span>{itemData?.amount} $ </span>
   <span>{itemData?.amount} $ </span>
  </div>
  </React.Fragment>
 )
}


function MobileRate({data = [],icon,style,text}) {
 return (
  <div className='rate' style={style}>
      <div className='rate-header' style={{justifyContent:'space-between'}}>
        {text} 
        <div style={{marginLeft:'40px'}}>
        <img src={'/assets/icons/turkish.svg'} className='img br-xs'/>
 
        
        <img src={'/assets/icons/turkish.svg'} className=' img br-xs'/>

        <img src={'/assets/icons/usa.svg'} className='img img-2 br-xs'/>
  
        </div>
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

export default MobileRate
