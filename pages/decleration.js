import axios from 'axios';
import router, { useRouter } from "next/router";
import React, { memo, useState } from 'react';
import 'react-day-picker/lib/style.css';
import { useForm } from "react-hook-form";
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

  if(!props.entry.isLoged){
    router.push('/register');
    return (
        <div style={{height:'100vh'}}></div>
    )
  }

  const [checkSerial, setCheckSerial] = useState('AA');
  const { locale } = useRouter();
  const {register,errors,handleSubmit,watch,setError} = useForm();
  const [subCategories, setSubCategories] = useState('AA');


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

     console.log(newFormData);

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
        <Page className='user-profile-page bg-bg pt-lg'>
            <Aside className='mr-sm'>
              <AsideMenu/>
            </Aside>
         <Main>
         <Card className='bg-white p-sm br-lg'>
          <Card.Header text='Yeni Bəyənnamə'/>
          <form onSubmit={handleSubmit(submit)}>
          <Card.Body className='bg-bg'>
            <div className='declaration__flex'>
                <FromGroup label='Ölkə seç' bodyClass='bg-white' className='w-50 pr-xs'
                 error={errors.country?.message}
                >
                  <Selectbox className='bg-white w-100' data={telData}
                   name='country'
                   Ref={register({
                    required:{value:true, message:'country type is required'},
                  })}
                    //  onChange={handleChange}
                  />
                </FromGroup>

                <FromGroup label='Bağlamadakı məhsul sayı' bodyClass='bg-white' className='w-50 pr-xs'
                error={errors.count?.message}
                >
                  <Input type='number' name='count'
                    Ref={register({
                      required:{value:true, message:'count is required'},
                    })}  
                    //  onChange={handleChange}
                  />
                  
                </FromGroup>
                <FromGroup label='Track İD' bodyClass='bg-white' className='w-50 pr-xs'
                error={errors.track_number?.message}
                >
                  <Input type='text' name='track_number'
                     Ref={register({
                      required:{value:true, message:'track number is required'},
                    })}
                    //  onChange={handleChange}
                  />
                  
                </FromGroup>

                <FromGroup label='Tarix' bodyClass='bg-white' className='w-50 pr-xs'
                error={errors.date?.message}
                >
                  <Input type='date' name='date'
                     Ref={register({
                      required:{value:true, message:'date is required'},
                    })} 
                    //  onChange={handleChange}
                  />

                </FromGroup>
                <FromGroup label='Magaza adı' bodyClass='bg-white' className='w-50 pr-xs'
                error={errors.shop_name?.message}
                >
                  <Input type='text' name='shop_name'
                     Ref={register({
                       required:{value:true, message:'shop name is required'},
                     })}
                    //  onChange={handleChange}
                  />
                </FromGroup>

                <FromGroup label='Məhsul adı' bodyClass='bg-white' className='w-50 pr-xs'
                error={errors.product_name?.message}
                >
                  <Input type='text' name='product_name'
                     Ref={register({
                       required:{value:true, message:'product name is required'},
                     })}
                    //  onChange={handleChange}
                  />
                </FromGroup>

                <FromGroup label='Əsas qrup' bodyClass='bg-white' className='w-50 pr-xs'
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


                <FromGroup label='Alt qrup' bodyClass='bg-white' className='w-50 pr-xs'
                 error={errors.sub_category?.message}
                >
                  <Selectbox className='bg-white w-100' data={subCategories && props.mainCategories.find(x => x.id=== +subCategories)?.sub_categories}
                   name='sub_category'
                   Ref={register({
                    required:{value:true, message:'sub category type is required'},
                  })}
                  />
                </FromGroup>


                <FromGroup label='Qiymət' bodyClass='bg-white' className='w-50 pr-xs'
                error={errors.price?.message}
                >
                  <Input type='number' name='price'
                     Ref={register({
                       required:{value:true, message:'price is required'}
                     })} 
                  />
                  
                </FromGroup>


                <FromGroup label='Valyuta' bodyClass='bg-white' className='w-50 pr-xs'
                 error={errors.currency?.message}
                >
                  <Selectbox className='bg-white' data={curData}
                   name='currency'
                   Ref={register({
                    required:{value:true, message:'currency type is required'},
                  })}
                  />
                </FromGroup>

                <FromGroup label='İnvoys yüklə' bodyClass='bg-white' className='w-50 pr-xs'
                error={errors.invoice?.message}
                >
                  <Input type='file' name='invoice'
                     Ref={register({
                       required:{value:true, message:'invoice is required'}
                     })} 
                  />
                  
                </FromGroup>

                <FromGroup label='Qeyd' bodyClass='bg-white' bodyStyle={{height:'150px'}} className='w-50 pr-xs'
                   error={errors.note?.message}
                   >
                      <textarea className='p-xs border-menu w-100 h-100 br-xxs' style={{outline:'none',}} placeholder='qeydiniz varsa daxil edin' name='note'
                        ref={register({
                          required:{value:true,message:'note is required'}    
                        })} 
                      />
                   </FromGroup>
            </div>
          </Card.Body>
            <Card.Footer className='mt-sm' style={{justifyContent:'flex-end'}}>
              <ButtonComponent className='w-25'  label='Bəyan et'/>
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
