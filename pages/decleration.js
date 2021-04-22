import axios from 'axios';
import { useRouter } from "next/router";
import React, { memo, useState } from 'react';
import 'react-day-picker/lib/style.css';
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
import Redirect from "../components/redirect/redirect";
import Selectbox from "../components/selectbox/selectbox";

const telData = [
  {id:15,name:'Türkiyə'},
  {id:16,name:'Türkiyə'},
  {id:17,name:'Türkiyə'}
 ]

 const curData = [
  {id:'try',name:'Türkiyə Lirəsi'},
  {id:'azn',name:'Azərbaycan Manatı'},
  {id:'eur',name:'Avro'},
  {id:'usd',name:'ABŞ dolları'},
  {id:'bla',name:'bla dolları'}


 ]
 
function Decleration(props) {
  const { formatMessage: f } = useIntl(); 

  if(!props.entry.isLoged){
    return <Redirect/>
  }

  const [checkSerial, setCheckSerial] = useState('AA');
  const { locale } = useRouter();
  const {register,errors,handleSubmit,watch,setError} = useForm();
  const [subCategories, setSubCategories] = useState('AA');
  const [fileName, setFileName] = useState(null);


  const handleChange = (ev) => {
     let {name, value} = ev.target;
     setUser({
       ...user,
       [name]: value
     })
  }

  const submit = (data) => {
      
     let newFormData = new FormData();
     for(let key in data){
       if(key === 'invoice')
         newFormData.append(key,data[key][0]);
       else
       newFormData.append(key,data[key]);
     }

     newFormData.append('_method','POST')

     axios.post(`${process.env.NEXT_PUBLIC_API_URL}batches?lan=${locale}`,newFormData,{
       headers: {
        'Content-Type':'multipart/form-data',
         'Accepts':'application/json',
         'Authorization':`Bearer ${props.entry.user.accessToken}`
      }
     }).then(res => {
       Swal.fire({
         title:res.message,
         icon:'success',
       })
     }).catch(err => {
      for(let key in err.response.data.errors){
        setError(key,{message: err.response.data.errors[key].join('\n')})
      }
     })
  }



    return (
        <Page className='user-profile-page bg-bg pt-lg pb-lg'>
            <Aside className='mr-sm'>
              <AsideMenu/>
            </Aside>
         <Main className='p-none'>
         <Card className='bg-white p-sm br-lg'>
          <Card.Header text={f({id:"decleration"})}/>
          <form onSubmit={handleSubmit(submit)}>
          <Card.Body className='bg-bg'>
            <div className='declaration__flex'>
                <FromGroup label={f({id:"chooseone"})} bodyClass='bg-white' className='w-50 pr-xs mb-sm'
                 error={errors.country?.message}
                >
                  <Selectbox className='bg-white w-100' 
                     data={[
                     {id:15,name:f({id:'turkey'})},
                     {id:16,name:f({id:'usa'})},
                     {id:17,name:f({id:'ukraina'})}
                    ]}
                   name='country'
                   Ref={register({
                    required:{value:true, message:'country type is required'},
                  })}
                    //  onChange={handleChange}
                  />
                </FromGroup>

                <FromGroup label='Track İD' bodyClass='bg-white' className='w-50 pr-xs mb-sm'
                error={errors.track_number?.message}
                >
                  <Input type='text' name='track_number'
                     Ref={register({
                      required:{value:true, message:'track number is required'},
                    })}
                    //  onChange={handleChange}
                  />
                  
                </FromGroup>

                <FromGroup label={f({id:"shopname"})} bodyClass='bg-white' className='w-50 pr-xs mb-sm'
                error={errors.shop_name?.message}
                >
                  <Input type='text' name='shop_name'
                     Ref={register({
                       required:{value:true, message:'shop name is required'},
                     })}
                    //  onChange={handleChange}
                  />
                </FromGroup>

                <FromGroup label={f({id:"main-g"})} bodyClass='bg-white' className='w-50 pr-xs mb-sm'
                 error={errors.main_group?.message}
                >
                  <Selectbox className='bg-white w-100 ' data={props.mainCategories}
                   name='main_group'
                   Ref={register({
                    required:{value:true, message:'main_group type is required'},
                  })}
                     onChange={(ev) => {
                       setSubCategories(ev.target.value)
                     }}
                  />
                </FromGroup>


                <FromGroup label={f({id:"sub-g"})} bodyClass='bg-white' className='w-50 pr-xs mb-sm'
                 error={errors.sub_category?.message}
                >
                  <Selectbox className='bg-white w-100' data={subCategories && props.mainCategories.find(x => x.id=== +subCategories)?.sub_categories}
                   name='sub_category'
                   Ref={register({
                    required:{value:true, message:'sub category type is required'},
                  })}
                  />
                </FromGroup>


                <FromGroup label={f({id:"price-inv"})} bodyClass='bg-white' className='w-50 pr-xs mb-sm'
                error={errors.price?.message}
                >
                  <Input type='number' name='price'
                     Ref={register({
                       required:{value:true, message:'price is required'}
                     })} 
                  />
                  
                </FromGroup>


                <FromGroup 
                  label={f({id:"upload"})} 
                  bodyClass='bg-white' 
                  className='w-50 pr-xs mb-sm'
                  bodyStyle={{height:'150px'}}
                error={errors.invoice?.message}
                >
                  <div className='file-uploade'>
                  <Input className='w-100' type='file' title=' ' name='invoice'
                     Ref={register({
                       required:{value:true, message:'invoice is required'}
                     })} 
                     onChange={(e) => {
                       console.log(e.target.files[0])
                      setFileName(e.target.files[0].name)
                     }}
                  />
                    <div className='over-layer'>
                        <img src='/assets/icons/upload.png'/>
                        <p>
                           Sürükləyib bura atın <br/>
                            və ya <br/>
                            <span>faylı seçin</span> <br/>
                            {
                              fileName && <strong>{fileName}</strong>
                            }
                        </p>
                    </div>
                  </div>
                </FromGroup>

                <FromGroup label={f({id:"note"})} bodyClass='bg-white' bodyStyle={{height:'150px'}} className='w-50 pr-xs mb-sm'
                   error={errors.note?.message}
                   >
                      <textarea className='p-xs w-100 h-100' style={{outline:'none',border:'none'}} placeholder='qeydiniz varsa daxil edin' name='note'
                        ref={register({
                          required:{value:true,message:'note is required'}    
                        })} 
                      />
                   </FromGroup>
            </div>
          </Card.Body>
            <Card.Footer className='mt-sm' style={{justifyContent:'flex-end'}}>
              <ButtonComponent className='w-25'  label={f({id:"declare-inadvance"})}/>
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

}


export async function getStaticProps({locale}) {

  let categories = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}categories/main?lan=${locale}`);

  return {
    props: {
      mainCategories: categories.data,
    },
  }

}

export default connect(mapStateToProps)(memo(Decleration))
