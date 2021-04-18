import { useRouter } from "next/router";
import React from 'react';
import ButtonComponent from "../button/index";
import Checkbox from "../checkbox/checkbox";
import { useIntl } from 'react-intl';

function PackageItem({item,checkRef,onCheck}) {
    const { formatMessage: f } = useIntl();
    const {locale} = useRouter()
    return (
        <div className='package-item mr-sm'>
            <div className='package-item-header'>
              <img style={{marginLeft:'-10px'}} src='./assets/images/a02.svg'/>
              <h5 style={{color:`${item.status.color}`}}>{item.status.name}</h5>
              <div className='package-item-body'>
                 <ul>
                     <li><strong>{f({id:"tracking"})}:</strong><small>{item.track_number}</small></li>
                     <li><strong>Smart Customs ID:</strong><small>{item.smart_customs_id}</small></li>
                     <li><strong>{f({id:"getwhere"})}:</strong><small>{item.from}</small></li>
                     <li><strong>{f({id:"lastprice"})}:</strong><small>{item.price} {item.currency}</small></li>
                     <li><strong>{f({id:"category"})}:</strong><small>{item.category}</small></li>
                     <li><strong>{f({id:"weight"})}:</strong><small>{item.weight} kq</small></li>
                     <li><strong>{f({id:"dateon"})}:</strong><small>{new Date(item.date).toDateString()}</small></li>
                 </ul>
              </div>
              <a href={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${item.invoice}`} download ><ButtonComponent style={{fontSize:'10px'}} className='h-initial p-xxs w-100 bg-bg' startElement={<span className='mr-xxs'>&#x2913;</span>} label={f({id:"upload"})}/></a>
              <div className='package-item-footer'>
               <div className='pif-amount'>
                   <span>{f({id:"deliveryprice"})}</span>
                   <span>{item.delivery_price || 0.00}</span>
               </div>
               <Checkbox 
                  Ref={checkRef} 
                  onClick={onCheck} 
                  value={item.id} 
                  data-price={item.price} 
                  text={f({id:"chooseone"})}/>
              </div>
            </div>
        </div>
    )
}

export default PackageItem
