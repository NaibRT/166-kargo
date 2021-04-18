import axios from 'axios';
import { useRouter } from "next/router";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ButtonComponent from "../components/button/index";
import FromGroup from "../components/form-group/form-group";
import Input from "../components/input/input";
import Page from "../components/page/page";
import { useIntl } from 'react-intl';

function Contact() {
    const { formatMessage: f } = useIntl(); 
    const {register,handleSubmit,errors,setError} = useForm();
    const [error,setErrors] = useState({});
    const {locale} = useRouter()

    const submit = (data) => {
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}contact?lan=${locale}`,data,{
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => {
        Swal.fire({
          title: 'Əməliyyat uğurla tamamlandı!',
          text: response.data.message,
          icon: 'success',
          confirmButtonText: 'OK',
        })
      }).catch(err => {
        setErrors({
          ...err.response.data
        })
      })
    }

    return (
        <Page className='bg-bg pb-lg h-100'>
            <main className='desktop-size contact-page bg-white br-xs mt-lg p-lg'>
             <div className='contact-info mr-lg' >
             <address className='contact-container p-lg bg-yellow br-sm'>
               <h3 className='mb-sm'>{f({id:'contact-us'})}</h3>
               <div className='mb-sm'><img className='mr-sm'  src='/assets/icons/45060.svg'/><span>Baki şəhəri. Səbail ray...Ş.Şamil küç. 16</span></div>
               <div className='mb-sm'><img className='mr-sm' src='/assets/icons/time-work_318-10641.svg'/><span>Həftə içi 10:00 - 19:00</span></div>
               <div className='mb-sm'><img className='mr-sm' src='/assets/icons/129932.svg'/><a className='color-black' href='tel:*0166'>*0166</a></div>
               <div className='mb-sm'><img className='mr-sm' src='/assets/icons/121923.svg'/><a className='color-black' href='mailto:info@166kargo.az'>info@166kargo.az</a></div>
             </address>
             </div>

             <div className='contact-page-form'>
             <h3 className='mb-sm'>{f({id:'contact-form'})}</h3>
               <p className='mb-sm'>{f({id:'cf-info'})}</p>
               <form onSubmit={handleSubmit(submit)}>
                   <FromGroup  className=' w-100 mb-xs' bodyClass='border-menu'
                   error={errors.fullname?.message}>
                      <Input className='p-xs' placeholder={f({id:"name"})} name='fullname' type='text'
                         Ref={register({
                           required:{value:true,message:f({id:'name-requir'})}
                         })}
                       />
                   </FromGroup>
                   <FromGroup  className=' w-100 mb-xs' bodyClass='border-menu'
                   error={errors.contact?.message}
                   >
                      <Input className='p-xs' placeholder={f({id:'email'})} name='contact' type='email'
                         Ref={register({
                          required:{value:true, message:f({id:'email-requir'})},
                          pattern:{value:/^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/,message:'email only takes letters'}
                        })} 
                       />
                   </FromGroup>
                   <FromGroup  className=' w-100 mb-xs' bodyStyle={{height:'150px',verticalAlign:'text-top'}}
                   error={errors.message?.message}
                   >
                      <textarea className='p-xs border-menu w-100 h-100 br-xxs' style={{outline:'none',}} placeholder={f({id:"message"})} name='message'
                        ref={register({
                          required:{value:true,message:f({id:'message-requir'})}    
                        })} 
                      />
                   </FromGroup>
                      { Object.keys(error).length>0 && 
                        Object.values(error).map(value =>(
                          <div><span className='color-err'>{value}</span></div>
                        ))
                    }
                   <ButtonComponent type='submit' className='w-100 mt-xs' label={f({id:'send'})}/>
               </form>
             </div>

             <div className='w-100 h-100'>
              <map>

              </map>
             </div>
            </main>


                  {/*mobile*/}
                  <main className='mb-size contact-page  br-xs mt-lg '>
             <div>
             <h3 className='mb-sm'> Bizimle Əlaqə</h3>
             <address className='contact-container p-lg bg-yellow br-sm'>
              
               <div className='mb-sm'><img className='mr-sm'  src='/assets/icons/45060.svg'/><span>Baki şəhəri. Səbail ray...Ş.Şamil küç. 16</span></div>
               <div className='mb-sm'><img className='mr-sm' src='/assets/icons/time-work_318-10641.svg'/><span>Həftə içi 10:00 - 19:00</span></div>
               <div className='mb-sm'><img className='mr-sm' src='/assets/icons/129932.svg'/><a href='tel:*0166'>*0166</a></div>
               <div className='mb-sm'><img className='mr-sm' src='/assets/icons/121923.svg'/><a href='mailto:info@166kargo.az'>info@166kargo.az</a></div>
             </address>
             </div>

             <h3 className='mb-sm'>{f({id:'contact-form'})}</h3>
               <p className='mb-sm'>Asagidaki formaya elaqe melumatlarinizi ve mesajinii daxil edin, biz size geri donus edek.</p>
             
             <div className='contact-page-form bg-white' style={{padding:'25px 25px'}}>
               <form onSubmit={handleSubmit(submit)}>
                  
                   <FromGroup  className=' w-100 mb-xs' 
                               bodyClass='border-menu border-color-subtitle'
                               error={errors.fullname?.message}
                   >
                      <Input className='p-xs' placeholder={f({id:'name'})} name='fullname' type='text'
                         Ref={register({
                           required:{value:true,message:f({id:"name-requir"})}
                         })}
                       />
                   </FromGroup>
                   <FromGroup  className=' w-100 mb-xs' bodyClass='border-menu border-color-subtitle'
                   error={errors.contact?.message}
                   >
                      <Input className='p-xs' placeholder={f({id:'email'})} name='contact' type='email'
                         Ref={register({
                          required:{value:true, message:f({id:'email-requir'})},
                          pattern:{value:/^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/,message:'email only takes letters'}
                        })} 
                       />
                   </FromGroup>
                   <FromGroup  className=' w-100 mb-xs' bodyClass='p-none border-color-subtitle' bodyStyle={{height:'150px',verticalAlign:'text-top'}}
                   error={errors.message?.message}
                   >
                      <textarea className='p-xs border-menu w-100 h-100 br-xxs' style={{outline:'none',fontFamily:'Segoe UI'}} placeholder={f({id:'message'})} name='message'
                        ref={register({
                          required:{value:true,message:f({id:'message-requir'})}    
                        })} 
                      />
                   </FromGroup>
                   <ButtonComponent type='submit' className='w-100 mt-xs' label={f({id:'send'})}/>
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
