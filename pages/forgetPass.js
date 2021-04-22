import Link from 'next/link';
import React, { memo, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { connect } from 'react-redux';
import ButtonComponent from '../components/button';
import Card from '../components/card/card';
import FromGroup from '../components/form-group/form-group';
import Input from '../components/input/input';
import Page from "../components/page/page";
import { Login } from '../redux/entry/entryActions';


function ForgetPassword(props) {

    const { formatMessage: f } = useIntl(); 
    const {register,handleSubmit,errors,reset,watch,setError,clearErrors} = useForm();

    const password = useRef({});
    password.current = watch("password",'');


      useEffect(() => {
         clearErrors();
         for(let key in props.Entry.errorMessages.errors){
           setError(key,{message: props.Entry.errorMessages.errors[key].join('\n')})
         }
      },[])

    //   useEffect(() => {
    //     if(props.Entry.isLoged){
    //       router.push('/packages');
    //     }
    //   },[props.Entry.isLoged])
    
      const submit = (data) => {
        props.Login('auth/login',JSON.stringify(data),{'content-type':'application/json'});
      }

    return (
        <Page className='h-100'>
           <Card className='login-card bg-white p-sm w-50 mt-lg' style={{display:'block'}}>
             <Card.Header style={{textAlign:'center'}} text={f({ id: 'updatepass' })}/>
             <Card.Body className='p-none'>
             <form className='login-form' onSubmit={handleSubmit(submit)}>

             <FromGroup label={f({id:'password'})} bodyClass='bg-bg' className='w-50 w-100'
           error={errors.password?.message}
         >
           <Input name='password' type='password' 
             Ref={register({
               required:{value:true,message:f({id:'pass-requir'})},
               pattern:{value:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message:f({id:'password-pattern'})}
             })}
           />
         </FromGroup>
         <FromGroup label={f({id:'repeat-pass'})} bodyClass='bg-bg' className='w-50 w-100 mb-xs'
           error={errors.password_confirmation?.message} 
         >
           <Input name='password_confirmation' type='password'
              Ref={register({
                required:{value:true,message:f({id:'repeatpas-requir'})},
                validate: value => 
                  value === password.current || f({id:'repeatpas-valid'})
              })}
           />
         </FromGroup>
             <ButtonComponent type='submit' className='w-100 mt-xs mb-sm' label={f({id:'send'})}/>
             </form>
             <div className='mt-xs' style={{display:'flex',justifyContent:'space-between'}}>
             {/* {f({id:'no-account'})} */}
             <span></span>
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
export default connect(mapStateToProp, mapDispatchToProp)(memo(ForgetPassword))
