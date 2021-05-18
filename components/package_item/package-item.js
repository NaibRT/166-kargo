import { useRouter } from "next/router";
import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import ButtonComponent from "../button/index";
import Checkbox from "../checkbox/checkbox";

const invoiceStatus={
    [0] :'url var',
    [1] :'Yüklənib',
    [2] :'Faktura var',
    [3] :'Faktura yoxdur',
    [4] :'Yüklə',

    'url var' :0,
    'Yüklənib' :1,
    'Faktura var' :2,
    'Faktura yoxdur' :3,
    'Yüklə' :4,
}

function PackageItem({item,checkRef,onCheck,addInvoice}) {
    const { formatMessage: f } = useIntl();
    const {locale} = useRouter();

    // const addInvoice = (id) => {
    // Swal.fire({
    //   //confirmButtonText: 'OK',
    //   showCancelButton: true,
    //   html:`
    //     <from id='swal-form'>
    //     <input type="file" id="swal-input1" class="swal2-input" required>
    //     <input  type="number" min="0" id="swal-input2" class="swal2-input w-100" required>
    //     </from>
    //   `
    // }).then(res => {
  
    //     let file = document.getElementById('swal-input1').value;
    //     let price = document.getElementById('swal-input2').value;
        
    //     let newFromData = new FormData();
    //     newFromData.set('id',id);
    //     newFromData.set('invoice',file);
    //     newFromData.set('price',price);
    //     // newFromData.set('price',price);

        
    //     axios.post(`${process.env.NEXT_PUBLIC_API_URL}batches/invoice`,newFromData,{
    //         headers: {
    //             authorization: `Bearer ${entry.user.accessToken}`,
    //         },
    //     }).then(res => {
    //         console.log(res.data)
    //         Swal.fire({
    //            confirmButtonText: 'OK',
    //            icon:'success',
    //            text:res.data.success,
    //         })
    //     }).catch(err => console.log(err))


    // });
    // }
    return (
        <div className='package-item mr-xs'>
            <div className='package-item-header'>
              {/* <img style={{marginLeft:'-10px'}} src='./assets/images/a02.svg'/> */}
              <h1>{item.shop}</h1>
              <h5 >{item.status.name}</h5>
              <h5 style={{color:'red'}}>{item.pay_status}</h5>
              <div className='package-item-body'>
                 <ul>
                     <li><strong>{f({id:"tracking"})}:</strong><small>{item.track_number}</small></li>
                     <li><strong>Smart Customs ID:</strong><small>{item.smart_customs_id}</small></li>
                     <li><strong>{f({id:"getwhere"})}:</strong><small>{item.from}</small></li>
                     <li><strong>{f({id:"lastprice"})}:</strong><small>{item.price} {item.currency}</small></li>
                     <li><strong>{f({id:"category"})}:</strong><small style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                     }}>{item.category}</small></li>
                     <li><strong>{f({id:"weight"})}:</strong><small>{item.weight} kq</small></li>
                     <li><strong>{f({id:"dateon"})}:</strong><small>{item.date}</small></li>
                 </ul>
              </div>
              {
                  item.invoice.invoice_status == invoiceStatus["url var"] ? 
                  <a href={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${item.invoice.url}`} download ><ButtonComponent style={{fontSize:'10px'}} className='h-initial p-xxs w-100 bg-bg' label={f({id:"see-invoice"})}/></a>
                  : item.invoice.invoice_status == invoiceStatus.Yüklə ? 
                  <ButtonComponent onClick={() => addInvoice(item.id)} style={{fontSize:'10px'}} className='h-initial p-xxs w-100 bg-bg' label={invoiceStatus[item.invoice.invoice_status]}/>
                  :  <ButtonComponent style={{fontSize:'10px'}} className='h-initial p-xxs w-100 bg-bg' label={invoiceStatus[item.invoice.invoice_status]}/>


              }
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

  
  export default (memo(PackageItem));
