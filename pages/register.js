import React, { memo, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from "react-redux"
import Button from '../components/button'
import Card from '../components/card/card'
import FromGroup from '../components/form-group/form-group'
import Input from '../components/input/input'
import Page from '../components/page/page'
import RadioButton from '../components/radio-button/radio-button'
import Selectbox from '../components/selectbox/selectbox'
import Switch from "../components/switch/switch"
import { UserRegister } from "../redux/entry/entryActions"
import { useIntl } from 'react-intl';




const telData = [
  {id:'+994',name:'+994'},
 ]

function Register(props) {

  useEffect(() => {
    clearErrors();
    for(let key in props.Entry.errorMessages.errors){
      setError(key,{message: props.Entry.errorMessages.errors[key].join('\n')})
    }
  },[props.Entry.errorMessages])

 const { formatMessage: f } = useIntl(); 
 const [isKorporative, setisKorporative] = useState(false);
 const [checkSerial, setCheckSerial] = useState('AA');

 const {register,handleSubmit,errors,reset,watch,setError,clearErrors} = useForm();

 const password = useRef({});
 const phone = useRef({});

 phone.current = watch("phone_typ",'');
 password.current = watch("password",'');

 const submit = (data) => {
  clearErrors();
  
   let newData = {
     ...data,
     phone:phone.current + data.phone,
     birthday: data.birthday.split('-').reverse().join('-')
   }
   console.log(newData)
   props.UserRegister('auth/register',newData,{'content-type':'application/json'});
 }

 
 return (
  <Page className='bg-bg register-page'>
    <main className='mt-lg'>
      <Card className='bg-white br-sm mr-sm p-sm w-50'>
       <Card.Header text={f({id:'register'})} endElelment={
       <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         <h3 className='cardHeaderText pr-xs' style={{fontSize:'1.5rem'}}>{f({id:'corporative'})}</h3>
         <Switch value={isKorporative} onClick={(e)=>{
          setisKorporative(e.target.checked)
       }}/></div>}/>
       <Card.Body className='p-none'>
        <form style={{display:'flex',flexWrap:'wrap'}} >
         <FromGroup label={f({id:'name'})} bodyClass='bg-bg p-xs' className='w-50 pr-xs mb-xs'
           error={errors.firstname?.message}
         >
          <Input type='text' name='firstname'
             Ref={register({
               required:{value:true, message:f({id:'name-requir'})},
               pattern:{value:'',message:f({id:'name-patter'})}
             })} 
           />
         </FromGroup>
         <FromGroup label={f({id:'surname'})} bodyClass='bg-bg p-xs' className='w-50 pr-xs mb-xs'
           error={errors.lastname?.message}
           
         >
          <Input type='text' name='lastname'
             Ref={register({
              required:{value:true, message:f({id:'surname-requir'})},
              pattern:{value:'',message:f({id:'surname-patter'})}
            })} 
          />
         </FromGroup>
         <FromGroup label={f({id:'email'})} bodyClass='bg-bg p-xs' className='w-50 pr-xs'
           error={errors.email?.message}
         >
          <Input type='email' name='email' 
             Ref={register({
              required:{value:true, message:f({id:'email-requir'})},
              pattern:{value:/^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/,message:f({id:'email-patter'})}
            })} 
          />
         </FromGroup>
         <FromGroup label={f({id:'phone'})} bodyClass='bg-bg' className='w-50 pr-xs mb-xs'
           error={errors.phone?.message}
         >
           <Selectbox className='bg-white' data={telData}
               name='phone_typ'
               Ref={register({
                required:{value:true, message:f({id:'phone-requir'})},
              })} 
           />
          <Input type='tel' name='phone'
              maxLength='9'
             Ref={register({
               required:{value:true, message:f({id:'phone-requir'})},
               pattern:{value:/^\(?(51|60|70|77|50|55)\)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$/,message:f({id:'phone-patter'})},
               maxLength:{value:9, message:f({id:'phone-len'})}
             })} 
          />
         </FromGroup>
         <FromGroup label={f({id:'gender'})} bodyClass=''  className='w-50 pr-xs mb-xs'>
           <RadioButton text={f({id:'men'})}name='gender' id='male' value='M' 
              Ref={register()} 
           />
           <RadioButton text={f({id:'women'})} name='gender' id='female' value='F' 
              Ref={register()} 
           />
         </FromGroup>
         <FromGroup label={f({id:'gender'})} bodyClass='bg-bg' className='w-50 pr-xs mb-xs'
           error={errors.birthday?.message}
         >
           <Input className='' name='birthday' type='date' format='dd/mm/yyyy'
               Ref={register({
                required:{value:true, message:f({id:'date-requir'})},
              })} 
           />
         </FromGroup>
         <FromGroup label={f({id:'serial'})} bodyClass='bg-bg' className='w-50 pr-xs mb-xs' 
           error={errors.serial?.message}
         >
           <Selectbox onChange={(ev)=>{
              setCheckSerial(ev.target.value)
           }} className='bg-white' data={[{id:'AA',name:'AA'},{id:'AZE',name:'AZE'}]}/>
          <Input type='text' name='serial'
            maxLength={checkSerial==='AA' ? '7' : '8'}
            Ref={register({
              required:{value:true, message:f({id:'serial-requir'})},
              maxLength:{value: checkSerial==='AA' ? 7 : 8, message:f({id:'serial-len'})}
            })} 
          />
         </FromGroup>
         <FromGroup label={f({id:'fin'})} bodyClass='bg-bg' className='w-50 pr-xs mb-xs' 
           error={errors.fin?.message}
         >
          <Input type='text' name='fin'
            maxLength='7'
            minLength='7'
            Ref={register({
              required:{value:true, message:f({id:'fin-requir'})},
              maxLength:{value:7,message:f({id:'fin-min-max'})},
              minLength:{value:7,message:f({id:'fin-min-max'})}
            })} 
          />
         </FromGroup>
         <FromGroup label={f({id:'nationality'})} bodyClass='bg-bg' className='w-50 pr-xs mb-xs' 
           error={errors.nationality?.message}
         >
           <Selectbox className='w-100 m-none' name='nationality' data={[{id:'Azerbaijan',name:'Azerbaijan'},{id:'Foreign',name:'Foreign'}]}
               Ref={register({
                required:{value:true, message:f({id:'nationality-requir'})},
              })} 
           />
         </FromGroup>
         <FromGroup label={f({id:'address'})} className='w-50 pr-xs mb-xs'
           error={errors.address?.message}
         >
           <Input name='address' type='text'
              Ref={register({
                required:{value:true, message:f({id:'address-requir'})},
              })} 
           />
         </FromGroup>
         {
          isKorporative && 
         <FromGroup label={f({id:'tin'})} bodyClass='bg-bg' className='w-100 mb-xs'
           error={errors.tin?.message}
         >
           <Input type='text' name='tin'
              Ref={
                isKorporative && 
                register({
                  required:{value:true, message:f({id:'tin-requir'})},
                })
              }
            />
         </FromGroup>
         }
         <FromGroup label={f({id:'password'})} bodyClass='bg-bg' className='w-50 pr-xs'
           error={errors.password?.message}
         >
           <Input name='password' type='password' 
             Ref={register({
               required:{value:true,message:f({id:'password-requir'})},
               pattern:{value:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message:f({id:'password-pattern'})}
             })}
           />
         </FromGroup>
         <FromGroup label={f({id:'repeat-pass'})} bodyClass='bg-bg' className='w-50 pr-xs mb-xs'
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
        </form>
        <Card.Footer className='mt-sm'>
          <Button label={f({id:'complate-register'})} 
                  endElement={<span className='ml-xs'>&rarr;</span>} 
                  className='w-100'
                  onClick={handleSubmit(submit)} 
          />
        </Card.Footer>
       </Card.Body>
      </Card>
      <Card className='w-50  mobile'>
       <Card.Body className='w-100 h-100 p-none'>
         <p className='pb-sm'>{f({id:'register-hard'})}</p>
         {/* <video  poster='./assets/images/img1.png'>
            </video> */}
         <img className='w-100' src='./assets/images/img1.png'/>
       </Card.Body>
      </Card>
    </main>
  </Page>
 )
}

const mapStateToProps = state => ({
  Entry: state.entry
});

const mapDispatchToProps = {
  UserRegister
}
export default connect(mapStateToProps,mapDispatchToProps)(memo(Register))
