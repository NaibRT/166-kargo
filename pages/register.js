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
       <Card.Header text='Qeydiyyat' endElelment={
       <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         <h3 className='cardHeaderText pr-xs' style={{fontSize:'1.5rem'}}>Korporativ</h3>
         <Switch value={isKorporative} onClick={(e)=>{
          setisKorporative(e.target.checked)
       }}/></div>}/>
       <Card.Body className='p-none'>
        <form style={{display:'flex',flexWrap:'wrap'}} >
         <FromGroup label='Adiniz' bodyClass='bg-bg p-xs' className='w-50 pr-xs mb-xs'
           error={errors.firstname?.message}
         >
          <Input type='text' name='firstname'
             Ref={register({
               required:{value:true, message:'ad məcburidir'},
               pattern:{value:'',message:'ad yalnız hərflər ola bilər'}
             })} 
           />
         </FromGroup>
         <FromGroup label='Soyadiniz' bodyClass='bg-bg p-xs' className='w-50 pr-xs mb-xs'
           error={errors.lastname?.message}
           
         >
          <Input type='text' name='lastname'
             Ref={register({
              required:{value:true, message:'soyad məcburidir'},
              pattern:{value:'',message:'soyad yalnız hərflər ola bilər'}
            })} 
          />
         </FromGroup>
         <FromGroup label='E-mail' bodyClass='bg-bg p-xs' className='w-50 pr-xs'
           error={errors.email?.message}
         >
          <Input type='email' name='email' 
             Ref={register({
              required:{value:true, message:'email məcburidir'},
              pattern:{value:/^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/,message:'email düzgün formatda deyil'}
            })} 
          />
         </FromGroup>
         <FromGroup label='Telefon' bodyClass='bg-bg' className='w-50 pr-xs mb-xs'
           error={errors.phone?.message}
         >
           <Selectbox className='bg-white' data={telData}
               name='phone_typ'
               Ref={register({
                required:{value:true, message:'telefon məcburidir'},
              })} 
           />
          <Input type='tel' name='phone'
              maxLength='9'
             Ref={register({
               required:{value:true, message:'telefon məcburidir'},
               pattern:{value:/^\(?(51|60|70|77|50|55)\)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$/,message:'telefon düzgün format deyil'},
               maxLength:{value:9, message:'telefon 9 simvoldan ibarət ola bilər'}
             })} 
          />
         </FromGroup>
         <FromGroup label='Cins' bodyClass=''  className='w-50 pr-xs mb-xs'>
           <RadioButton text='Kişi' name='gender' id='male' value='M' 
              Ref={register()} 
           />
           <RadioButton text='Qadın' name='gender' id='female' value='F' 
              Ref={register()} 
           />
         </FromGroup>
         <FromGroup label='Doğum tarixi' bodyClass='bg-bg' className='w-50 pr-xs mb-xs'
           error={errors.birthday?.message}
         >
           <Input className='' name='birthday' type='date' format='dd/mm/yyyy'
               Ref={register({
                required:{value:true, message:'tarix məcburidir'},
              })} 
           />
         </FromGroup>
         <FromGroup label='S/v seriya nömrəsi' bodyClass='bg-bg' className='w-50 pr-xs mb-xs' 
           error={errors.serial?.message}
         >
           <Selectbox onChange={(ev)=>{
              setCheckSerial(ev.target.value)
           }} className='bg-white' data={[{id:'AA',name:'AA'},{id:'AZE',name:'AZE'}]}/>
          <Input type='text' name='serial'
            maxLength={checkSerial==='AA' ? '7' : '8'}
            Ref={register({
              required:{value:true, message:'seriya nömrəsi məcburidir'},
              maxLength:{value: checkSerial==='AA' ? 7 : 8, message:'seriya nömrə 7-8 simvol aralığında olmalıdır'}
            })} 
          />
         </FromGroup>
         <FromGroup label='S/V Fin kodu' bodyClass='bg-bg' className='w-50 pr-xs mb-xs' 
           error={errors.fin?.message}
         >
          <Input type='text' name='fin'
            maxLength='7'
            minLength='7'
            Ref={register({
              required:{value:true, message:'fin kod məcburidir'},
              maxLength:{value:7,message:'maximum 7 simvol olmalıdır'},
              minLength:{value:7,message:'minimum 7 simvol olmalıdır'}
            })} 
          />
         </FromGroup>
         <FromGroup label='Milliyət' bodyClass='bg-bg' className='w-50 pr-xs mb-xs' 
           error={errors.nationality?.message}
         >
           <Selectbox className='w-100 m-none' name='nationality' data={[{id:'Azerbaijan',name:'Azerbaijan'},{id:'Foreign',name:'Foreign'}]}
               Ref={register({
                required:{value:true, message:'milliyət məcburidir'},
              })} 
           />
         </FromGroup>
         <FromGroup label='Ünvan' className='w-50 pr-xs mb-xs'
           error={errors.address?.message}
         >
           <Input name='address' type='text'
              Ref={register({
                required:{value:true, message:'ünvan məcburidir'},
              })} 
           />
         </FromGroup>
         {
          isKorporative && 
         <FromGroup label='Vöen' bodyClass='bg-bg' className='w-100 mb-xs'
           error={errors.tin?.message}
         >
           <Input type='text' name='tin'
              Ref={
                isKorporative && 
                register({
                  required:{value:true, message:'vöen məcburidir'},
                })
              }
            />
         </FromGroup>
         }
         <FromGroup label='Şifrə' bodyClass='bg-bg' className='w-50 pr-xs'
           error={errors.password?.message}
         >
           <Input name='password' type='password' 
             Ref={register({
               required:{value:true,message:'şifrə məcburidir'},
               pattern:{value:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message:'şifrə min 1 hərf, 1rəqəm və 8 simvol olmalıdır'}
             })}
           />
         </FromGroup>
         <FromGroup label='Təkrar şifrə' bodyClass='bg-bg' className='w-50 pr-xs mb-xs'
           error={errors.password_confirmation?.message} 
         >
           <Input name='password_confirmation' type='password'
              Ref={register({
                required:{value:true,message:'təkrar şifrə məcburidir'},
                validate: value => 
                  value === password.current || 'təkrar şifrə uyğun deyil'
              })}
           />
         </FromGroup>
        </form>
        <Card.Footer className='mt-sm'>
          <Button label='Qeydiyyatı tamamla' 
                  endElement={<span className='ml-xs'>&rarr;</span>} 
                  className='w-100'
                  onClick={handleSubmit(submit)} 
          />
        </Card.Footer>
       </Card.Body>
      </Card>
      <Card className='w-50  mobile'>
       <Card.Body className='w-100 h-100 p-none'>
         <p className='pb-sm'>Qeydiyyatdan keçmekdə çəntinlik çəkirsizsə videonu izləyin</p>
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
