import axios from "axios";
import { useRouter } from "next/router";
import React, { memo, useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { useIntl } from 'react-intl';
import { connect } from "react-redux";
import Swal from "sweetalert2";
import AsideMenu from "../components/aside-menu/index";
import Aside from '../components/aside/aside';
import ButtonComponent from "../components/button/index";
import Card from "../components/card/card";
import FromGroup from "../components/form-group/form-group";
import Input from "../components/input/input";
import Main from '../components/main/main';
import Page from "../components/page/page";
import RadioButton from "../components/radio-button/radio-button";
import Redirect from "../components/redirect/redirect";
import Selectbox from "../components/selectbox/selectbox";
import { UpdateUser } from "../redux/entry/entryActions";


const telData = [
  {id:'050',name:'050'},
  {id:'051',name:'051'},
  {id:'055',name:'055'},
  {id:'070',name:'070'},
  {id:'077',name:'077'},
 ]
 
function UserInfo(props) {
  const { formatMessage: f } = useIntl();
  if(!props.entry.isLoged){
    return <Redirect/>
  }
  const [checkSerial, setCheckSerial] = useState('AA');
  const [user, setUser] = useState({
    ...props.entry.user.user,
    phone: props.entry.user.user.phone.slice(3),
    phone_typ:props.entry.user.user.phone.substr(0,3)
  });

  const { locale, locales, defaultLocale } = useRouter();
  const {register,errors,handleSubmit,watch,setError} = useForm();
  const {register:uRegister,errors:uErrors,handleSubmit:uHandleSubmit,setError:uSetError} = useForm();

  useEffect(() => {
    for(let key in props.entry.errorMessages.errors){
      setError(key,{message: props.entry.errorMessages.errors[key].join('\n')})
      uSetError(key,{message: props.entry.errorMessages.errors[key].join('\n')})
    }
  },[props.entry.errorMessages])

  const password = useRef();
  const phone = useRef();

  password.current = watch('new_password','');
  phone.current = watch("phone_typ",'');

  const resetPassword = (data) => {
    axios.put(`${process.env.NEXT_PUBLIC_API_URL}user/password?lan=${locale}`,data,{
      headers: {
          'content-type': 'application/json',
          'accept':'application/json',
          'authorization': `Bearer ${props.entry.user.accessToken}`
        }
    })
    .then(async res => {
       let data = await res;
       Swal.fire({
         title: 'Success!',
         text: data.message,
         icon: 'success',
         confirmButtonText: 'OK',
       })
    })
    .catch(error => {
      console.log(error)
     Swal.fire({
       title: 'Error!',
       text: error.message,
       icon: 'error',
       confirmButtonText: 'OK',
     })
    })
  }

  const updateUserData = (data) => {
    let newData = {
      ...data,
      phone:data.phone_typ + data.phone,
      birthday: data.birthday.split('-').reverse().join('-')
    }

     props.UpdateUser(`user?lan=${locale}`,newData,{
      'content-type': 'application/json',
      'accept':'application/json',
      'authorization': `Bearer ${props.entry.user.accessToken}`
    })

  }

  const handleChange = (ev) => {
     let {name, value} = ev.target;
     setUser({
       ...user,
       [name]: value
     })
  }



    return (

        <Page className='user-profile-page bg-bg pt-lg pb-lg'>
            <Aside className='mr-sm'>
              <AsideMenu/>
            </Aside>
         <Main className='mobile__color p-none'>
         <Card className='bg-white p-sm br-lg'>
          <Card.Header text={f({id:"personalinfo"})}/>
          <form onSubmit={uHandleSubmit(updateUserData)}>
          <Card.Body className='bg-bg'>
            <div className='flex__column' style={{display:'flex',flexWrap:'wrap'}}>
                <FromGroup label={f({id:'name'})}  bodyClass='bg-white' className='w-50 pr-xs mb-sm'
                 error={uErrors.firstname?.message}
                >
                  <Input type='text' name='firstname'
                    Ref={uRegister({
                     required:{value:true, message:'name is required'},
                     pattern:{value:'',message:'name only takes letters'}
                   })}
                     value={user.firstname}
                     onChange={handleChange}
                  />
                </FromGroup>
                <FromGroup label={f({id:'surname'})} bodyClass='bg-white' className='w-50 pr-xs mb-sm'
                error={uErrors.lastname?.message}
                >
                  <Input type='text' name='lastname'
                    Ref={uRegister({
                      required:{value:true, message:'surname is required'},
                      pattern:{value:'',message:'surname only takes letters'}
                    })}  
                    value={user.lastname}                
                     onChange={handleChange}
                  />
                  
                </FromGroup>
                <FromGroup label={f({id:'email'})} bodyClass='bg-white' className='w-50 pr-xs mb-sm'
                error={uErrors.email?.message}
                >
                  <Input type='email' name='email'
                     Ref={uRegister({
                      required:{value:true, message:'email is required'},
                      pattern:{value:/^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/,message:'email only takes letters'}
                    })}
                    value={user.email}
                     onChange={handleChange}
                  />
                  
                </FromGroup>
                <FromGroup label={f({id:'phone'})} bodyClass='bg-white' className='w-50 pr-xs mb-sm'
                error={uErrors.phone?.message}
                >
                  <Selectbox 
                   className='bg-white' 
                   data={telData}
                   name='phone_typ'
                   Ref={uRegister({
                    required:{value:true, message:'phone type is required'},
                  })}
                     value={user.phone_typ} 
                     onChange={handleChange}
                  />
                  
                  <Input type='tel' name='phone'
                    maxLength='9'
                     Ref={uRegister({
                       required:{value:true, message:'phone is required'},
                       pattern:{value:/^[0-9]{3}[0-9]{2}[0-9]{2}$/,message:'phone is not correct format'},
                       maxLength:{value:9, message:'phone must be 9 digits'}
                     })}
                     value={user.phone}
                     onChange={handleChange}
                  />
                  
                </FromGroup>
                <FromGroup label={f({id:'serial'})} bodyClass='bg-white' className='w-50 pr-xs mb-sm'
                error={uErrors.serial?.message}
                >
                   <Selectbox 
                     onChange={(ev)=>{
                     setCheckSerial(ev.target.value)
                     handleChange(ev)
                     }}
                     name='serial_type' 
                     className='bg-white' 
                     data={[{id:'AA',name:'AA'},{id:'AZE',name:'AZE'}]}
                     value={user.serial_type}  
                     />
                  <Input type='text' name='serial'
                     maxLength={checkSerial==='AA' ? '7' : '8'}
                     Ref={uRegister({
                       required:{value:true, message:'serial number is required'},
                       maxLength:{value: checkSerial==='AA' ? 7 : 8, message:'serial number is not correct'}
                     })}
                     value={user.serial}
                     onChange={handleChange}
                  />
                  
                </FromGroup>
                 <FromGroup label={f({id:'gender'})} bodyClass=''  className='w-50 pr-xs mb-sm'>
                  <RadioButton text={f({id:'men'})} name='gender' id='male' value='M' 
                     Ref={uRegister()} 
                     checked={user.gender === 'M' ? true : false}
                     onChange={handleChange}
                  />
                  
                  <RadioButton text={f({id:'women'})} name='gender' id='female' value='F' 
                     Ref={uRegister()} 
                     checked={user.gender === 'F' ? true : false}
                     onChange={handleChange}
                  />
                  
                </FromGroup>
                 <FromGroup label={f({id:'fin'})} bodyClass='bg-white' className='w-50 pr-xs mb-sm'
                error={uErrors.fin?.message}
                >
                  <Input type='text' name='fin'
                     maxLength='7'
                     minLength='7'
                     Ref={uRegister({
                       required:{value:true, message:'fin number is required'},
                       maxLength:{value:7,message:'maximum 7 digits is required'},
                       minLength:{value:7,message:'minimum 7 digits is required'}
                     })} 
                     value={user.fin}
                     onChange={handleChange}
                  />
                  
                </FromGroup>

                <FromGroup label={f({id:'nationality'})} bodyClass='bg-white' className='w-50 pr-xs mb-sm'
                error={uErrors.nationality?.message}
                >
                  <Selectbox data={[{id:'Azerbaijan',name:'Azerbaijan'},{id:'Foreign',name:'Foreign'}]} name='nationality'
                      Ref={uRegister({
                       required:{value:true, message:'nationality is required'},
                     })} 
                     value={user.nationality}
                     onChange={handleChange}
                  />
                  
                </FromGroup>

                <FromGroup label={f({id:'date'})} bodyClass='bg-white' className='w-50 pr-xs mb-sm'
                error={uErrors.birthday?.message}
                >
                  <Input type='date' name='birthday'
                     Ref={uRegister({
                      required:{value:true, message:'birthday is required'},
                    })} 
                    value={user.birthday}
                     onChange={handleChange}
                  />
                  
                </FromGroup>
                <FromGroup label={f({id:'address'})} bodyClass='bg-white' className='w-50 pr-xs mb-sm'
                error={uErrors.address?.message}
                >
                  <Input type='text' name='address'
                    Ref={uRegister({
                      required:{value:true, message:'address  is required'},
                    })}
                    value={user.address}
                     onChange={handleChange}
                  />
                  
                </FromGroup>
            </div>
          </Card.Body>
            <Card.Footer className='mt-sm' style={{justifyContent:'flex-end'}}>
              <ButtonComponent className='p-xs'  label={f({id:'update'})}/>
            </Card.Footer>
            </form>
         </Card>

         <Card className='bg-white p-sm'>
          <Card.Header text={f({id:'updatepass'})}/>
          <form onSubmit={handleSubmit(resetPassword)}>
          <Card.Body className='bg-bg'>
            <div style={{display:'flex',flexWrap:'wrap'}}>
                <FromGroup label={f({id:'oldpassword'})} bodyClass='bg-white' className='w-50 pr-xs mb-sm'
                  error={errors.old_password?.message}
                >
                  <Input type='password' name='old_password'
                     Ref={register({
                      required:{value:true,message:f({id:'pass-requir'})},
                      pattern:{value:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message:f({id:'pass-patter'})}
                    })}
                  />
                </FromGroup>
                <div className="w-50"></div>

                <FromGroup label={f({id:'newpassword'})} bodyClass='bg-white' className='w-50 pr-xs mb-sm'
                  error={errors.new_password?.message}
                >
                  <Input type='password' name='new_password'
                     Ref={register({
                      required:{value:true,message:f({id:'pass-requir'})},
                      pattern:{value:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message:f({id:'pass-patter'})}
                    })}
                  />
                </FromGroup>

                <FromGroup label={f({id:'repeat-pass'})} bodyClass='bg-white' className='w-50 pr-xs mb-sm'
                  error={errors.new_password_confirmation?.message}

                >
                  <Input type='password' name='new_password_confirmation'
                     Ref={register({
                      required:{value:true,message:f({id:'repeatpas-requir'})},
                      validate: value =>
                        value === password.current || f({id:'repeatpas-valid'})
                    })}
                  />
                </FromGroup>

            </div>
          </Card.Body>
          <Card.Footer className='mt-sm' style={{justifyContent:'flex-end'}}>
              <ButtonComponent className='p-xs' label={f({id:"updatepass"})}/>
            </Card.Footer>
          </form>
         </Card>
            </Main>
        </Page>
    )
}

const mapStateToProps = state => ({
  entry: state.entry
});

const mapDispatchToProps = {
  UpdateUser
}
export default connect(mapStateToProps,mapDispatchToProps)(memo(UserInfo))
