import { useRouter } from "next/router";
import React from 'react';
import { useIntl } from 'react-intl';
import ButtonComponent from "../button/index";
import Checkbox from "../checkbox/checkbox";

function PackageItem({item,checkRef,onCheck}) {
    const { formatMessage: f } = useIntl();
    const {locale} = useRouter()
    return (
        <div className='package-item mr-xs'>
            <div className='package-item-header'>
              {/* <img style={{marginLeft:'-10px'}} src='./assets/images/a02.svg'/> */}
              <h1>{item.shop}</h1>
              <h5 style={{color:`${item.status.color}`}}>{item.status.name}</h5>
              <h5 style={{color:'red'}}>{item.pay_status}</h5>
              <div className='package-item-body'>
                 <ul>
                     <li><strong>{f({id:"tracking"})}:</strong><small>{item.track_number}</small></li>
                     <li><strong>Smart Customs ID:</strong><small>{item.smart_customs_id}</small></li>
                     <li><strong>{f({id:"getwhere"})}:</strong><small>{item.from}</small></li>
                     <li><strong>{f({id:"lastprice"})}:</strong><small>{parseFloat(item.price*0.21).toFixed(2)} AZN</small></li>
                     <li><strong>{f({id:"category"})}:</strong><small style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                     }}>{item.category}</small></li>
                     <li><strong>{f({id:"weight"})}:</strong><small>{item.weight} kq</small></li>
                     <li><strong>{f({id:"dateon"})}:</strong><small>{item.date}</small></li>
                 </ul>
              </div>
              <a href={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${item.invoice}`} download ><ButtonComponent style={{fontSize:'10px'}} className='h-initial p-xxs w-100 bg-bg' label={f({id:"see-invoice"})}/></a>
              <div className='package-item-footer'>
               <div className='pif-amount'>
                   <span>{f({id:"deliveryprice"})}</span>
                   {
                       item.customs_value_3 ? 
                       <>
                         <span>{item.customs_value_3 ? parseFloat(item.customs_value_3).toFixed(2) : 0.00} AZN</span>
                         <del style={{textDecorationColor:'red'}} >{+item.delivery_price ? parseFloat(item.delivery_price).toFixed(2) : 0.00} AZN</del>
                       </>
                       :
                       <>
                          <span>{item.delivery_price ? parseFloat(+item.delivery_price).toFixed(2) : 0.00} AZN</span>
                       </>
                   }
                   
               </div>
               <Checkbox 
                  Ref={checkRef} 
                  onClick={onCheck} 
                  value={item.id}
                  disabled={item.pay_status && true} 
                  data-price={
                       parseFloat(item.delivery_price).toFixed(2)  
                    } 
                    data-discount={
                        parseFloat(item.customs_value_3) ? parseFloat(item.customs_value_3).toFixed(2) 
                        :0
                    }
                  text={f({id:"chooseone"})}/>
              </div>
            </div>
        </div>
    )
}

export default PackageItem
