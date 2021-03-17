import React from 'react';
import ButtonComponent from "../components/button/index";
import FromGroup from "../components/form-group/form-group";
import Input from "../components/input/input";
import Page from "../components/page/page";

function Contact() {
    return (
        <Page className='bg-bg'>
            <main className='contact-page bg-white br-xs mt-lg p-lg'>
             <div className='contact-info mr-lg' >
             <address className='contact-container p-lg bg-yellow br-sm'>
               <h3 className='mb-sm'> Bizimle Əlaqə</h3>
               <div className='mb-sm'><img className='mr-sm'  src='/assets/icons/45060.svg'/><span>Baki şəhəri. Səbail ray...Ş.Şamil küç. 16</span></div>
               <div className='mb-sm'><img className='mr-sm' src='/assets/icons/time-work_318-10641.svg'/><span>Həftə içi 10:00 - 19:00</span></div>
               <div className='mb-sm'><img className='mr-sm' src='/assets/icons/129932.svg'/><a href='tel:*0166'>*0166</a></div>
               <div className='mb-sm'><img className='mr-sm' src='/assets/icons/121923.svg'/><a href='mailto:info@166kargo.az'>info@166kargo.az</a></div>
             </address>
             </div>

             <div className='contact-page-form'>
             <h3 className='mb-sm'>Əlaqə formu</h3>
               <p className='mb-sm'>Asagidaki formaya elaqe melumatlarinizi ve mesajinii daxil edin, biz size geri donus edek.</p>
               <form>
                   <FromGroup  className=' w-100' bodyClass='border-menu'>
                      <Input className='p-xs' placeholder='Adiniz' name='name' type='text' />
                   </FromGroup>
                   <FromGroup  className=' w-100' bodyClass='border-menu'>
                      <Input className='p-xs' placeholder='E-poct ve ya telefon nomreniz' name='email' type='email' />
                   </FromGroup>
                   <FromGroup  className=' w-100' bodyStyle={{height:'150px',verticalAlign:'text-top'}}>
                      <textarea className='p-xs border-menu w-100 h-100 br-xxs' style={{outline:'none',}} placeholder='Mesajiniz' name='message' />
                   </FromGroup>
                   <ButtonComponent className='w-100 mt-xs' label='gonder'/>
               </form>
             </div>

             <div className='w-100 h-100'>
              <map>

              </map>
             </div>
            </main>
        </Page>
    )
}

export default Contact
