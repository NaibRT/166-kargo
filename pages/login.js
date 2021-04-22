import Link from 'next/link';
import router from "next/router";
import React, { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { connect } from 'react-redux';
import ButtonComponent from '../components/button';
import Card from '../components/card/card';
import FromGroup from '../components/form-group/form-group';
import Input from '../components/input/input';
import Page from "../components/page/page";
import { Login } from '../redux/entry/entryActions';


function LoginPage(props) {

    const { formatMessage: f } = useIntl(); 
    const { register,handleSubmit,errors,clearErrors,setError } = useForm();
      useEffect(() => {
         clearErrors();
         for(let key in props.Entry.errorMessages.errors){
           setError(key,{message: props.Entry.errorMessages.errors[key].join('\n')})
         }
      },[])

      useEffect(() => {
        if(props.Entry.isLoged){
          router.push('/packages');
        }
      },[props.Entry.isLoged])
    
      const submit = (data) => {
        props.Login('auth/login',JSON.stringify(data),{'content-type':'application/json'});
      }

    return (
        <Page className='bg-bg p-xxl'>
           <Card className='login-card bg-white p-sm w-50 mt-lg' style={{display:'block'}}>
             <Card.Header style={{textAlign:'center'}} text={f({ id: 'signin' })}/>
             <Card.Body className='p-none'>
             <form className='login-form' onSubmit={handleSubmit(submit)}>
               <FromGroup 
                  label={f({ id: 'email' })}
                  bodyClass='bg-bg w-100' 
                  error={errors.email?.message}
                  className='mb-sm'
                  >
                 <Input Ref={register({
                   required:{value:true,message:f({ id: 'emailerror' })},
                  //  pattern:/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
                 })} type='email' name='email'/>
               </FromGroup>
               <FromGroup 
                 label={f({id:'password'})} 
                 bodyClass='bg-bg w-100'
                 error={errors.password?.message}
                 className='mb-lg'
               >
                 <Input
                 Ref={register({
                  required:{value:true,message:f({id:'pass-requir'})},
                  // pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
                })}
                  type='password' name='password'/>
               </FromGroup>
             <ButtonComponent type='submit' className='w-100 mt-xs mb-sm' label={f({id:'login'})}/>
             </form>
             <div className='mt-xs' style={{display:'flex',justifyContent:'space-between'}}>
             <span>{f({id:'no-account'})}</span>
             <Link href='/register'>
                 <a>
                 <span className='color-yellow' style={{cursor:'pointer'}}>{f({id:'signup'})}</span>
                 </a>
                 </Link></div>
             </Card.Body>
           </Card> 
        </Page>
    )
}

const mapDispatchToProp = { 
    Login
  }
  const mapStateToProp = state => ({
    Entry: state.entry
  });
export default connect(mapStateToProp, mapDispatchToProp)(memo(LoginPage))
