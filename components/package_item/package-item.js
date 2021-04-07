import { useRouter } from "next/router";
import React from 'react';
import ButtonComponent from "../button/index";
import Checkbox from "../checkbox/checkbox";

function PackageItem({item,checkRef,onCheck}) {
    const {locale} = useRouter()
    return (
        <div className='package-item mr-sm'>
            <div className='package-item-header'>
              <img style={{marginLeft:'-10px'}} src='./assets/images/a02.svg'/>
              <h5 style={{color:`${item.status.color}`}}>{item.status.name}</h5>
              <div className='package-item-body'>
                 <ul>
                     <li><strong>izləmə kodu:</strong><small>{item.track_number}</small></li>
                     <li><strong>Smart Customs ID:</strong><small>{item.smart_customs_id}</small></li>
                     <li><strong>Hardan:</strong><small>{item.from}</small></li>
                     <li><strong>Ümumi Qiymət:</strong><small>{item.price} {item.currency}</small></li>
                     <li><strong>Kateqoriya:</strong><small>{item.category}</small></li>
                     <li><strong>Çəki:</strong><small>{item.weight} kq</small></li>
                     <li><strong>Tarix:</strong><small>{new Date(item.date).toDateString()}</small></li>
                 </ul>
              </div>
              <a href={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${item.invoice}`} download ><ButtonComponent style={{fontSize:'10px'}} className='h-initial p-xxs w-100 bg-bg' startElement={<span className='mr-xxs'>&#x2913;</span>} label='İnvoysu yüklə'/></a>
              <div className='package-item-footer'>
               <div className='pif-amount'>
                   <span>Çatdırma haqqı</span>
                   <span>{item.delivery_price || 0.00}</span>
               </div>
               <Checkbox 
                  Ref={checkRef} 
                  onClick={onCheck} 
                  value={item.id} 
                  data-price={item.price} 
                  text='Seç'/>
              </div>
            </div>
        </div>
    )
}

export default PackageItem
