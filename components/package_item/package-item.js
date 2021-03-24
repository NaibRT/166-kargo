import React from 'react';
import ButtonComponent from "../button/index";
import Checkbox from "../checkbox/checkbox";

function PackageItem() {
    return (
        <div className='package-item'>
            <div className='package-item-header'>
              <img style={{marginLeft:'-10px'}} src='./assets/images/a02.svg'/>
              <h5 className='color-err'>Xarici anvbardan</h5>
              <div className='package-item-body'>
                 <ul>
                     <li><strong>izləmə kodu:</strong><small>123242824823272</small></li>
                     <li><strong>Smart Customs ID:</strong><small>123242824823272</small></li>
                     <li><strong>Hardan:</strong><small>Türkiyə</small></li>
                     <li><strong>Ümumi Qiymət:</strong><small>118.97 TRY</small></li>
                     <li><strong>Kateqoriya:</strong><small>Ceket</small></li>
                     <li><strong>Çəki:</strong><small>0.740 kq</small></li>
                     <li><strong>Tarix:</strong><small>27/01/2021, 19:01</small></li>
                 </ul>
              </div>
              <ButtonComponent style={{fontSize:'10px'}} className='h-initial p-xxs w-100 bg-bg' startElement={<span className='mr-xxs'>&#8683;</span>} label='İnvoysu yüklə'/>
              <div className='package-item-footer'>
               <div className='pif-amount'>
                   <span>Çatdırma haqqı</span>
                   <span>4.50$ (7.65M)</span>
               </div>
               <Checkbox text='Seç'/>
              </div>
            </div>
        </div>
    )
}

export default PackageItem
