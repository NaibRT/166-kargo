import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { memo, useLayoutEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useIntl } from 'react-intl'
import { connect } from 'react-redux'
import Swal from "sweetalert2"
import AsideMenu from '../components/aside-menu'
import Aside from '../components/aside/aside'
import ButtonComponent from '../components/button'
import Card from '../components/card/card'
import FromGroup from '../components/form-group/form-group'
import Input from '../components/input/input'
import Main from '../components/main/main'
import Page from '../components/page/page'
import Redirect from "../components/redirect/redirect"
import Selectbox from '../components/selectbox/selectbox'
import Tabel from '../components/tabel/tabel'



const telData = [
  {id:'050',name:'050'},
  {id:'051',name:'051'},
  {id:'055',name:'055'},
  {id:'070',name:'070'},
  {id:'077',name:'077'},
 ]

function AzerPost(props) {

  if(!props.entry.isLoged){
    return <Redirect/>
  }

  const { formatMessage: f } = useIntl(); 
  const dataHead = [
    f({id:'tracking'}),
    f({id:'shop'}),
    f({id:'category'}),
    f({id:'amount'}),
    f({id:'weight'}),
    f({id:'delivery'})
  ];
  const [state, setState] = useState({
    orderHistory:[],
    paidBatches:[],
    addresses:[]
  });
  const [region, setRegion] = useState('');
  const { locale } = useRouter();
  const {register,handleSubmit,errors} = useForm()
  useLayoutEffect(() => {
   Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}kuryers?lan=${locale}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.entry.user.accessToken}`
      }
    }),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}batches/paid?lan=${locale}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.entry.user.accessToken}`
      }
    }),
     axios.get(`${process.env.NEXT_PUBLIC_API_URL}kuryers/addresses?lan=${locale}`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.entry.user.accessToken}`
      }
  })
   ]).then(res => {
       setState({
         orderHistory : res[0].data,
         paidBatches  : res[1].data,
         addresses    : res[2].data.map(x => ({...x,name:x.address}))
       })
   }).catch(err => console.log(err))
  
  }, []);

 const submit = (data) => {

  if(state.paidBatches.length > 0){
    let newData = {
      ...data,
      phone: data.phone_prefix + data.phone
    }
   axios.post(`${process.env.NEXT_PUBLIC_API_URL}azerpost/addresses?lan=${locale}`,newData, {
     headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${props.entry.user.accessToken}`
     }
   }).then(res => {
       setState({
         ...state,
         paidBatches:[],
         orderHistory:res.data,
       })
          Swal.fire({
           success: 'success',
           text: 'emeliyyat ugurlu oldu',
           icon: 'success'
         })
   }).catch(error => console.log(error))
  }else{
    Swal.fire({
      success: 'info',
      text: 'Sifariş edilecek baglama yoxdur',
      icon: 'info'
    })
  }
 }

  return (
    <Page className='bg-bg pt-lg pb-lg'>
      <Aside className='mr-sm'>
        <AsideMenu />
      </Aside>
      <Main className='bg-bg p-none'>
        <Card className='p-sm bg-white coruier__cards br-lg'>
          <form onSubmit={handleSubmit(submit)}>
          <Card.Header text={f({id:'azerpost'})} />
          <Card.Body className='p-none'>
            <p className='mb-lg'></p>
            <div className='coruier-cards-form-container' style={{ display: 'flex', flexWrap: 'wrap' }}>
              <FromGroup 
               label={f({id:'choose-dist'})} 
               className='w-50 pr-lg mb-sm' 
               bodyClass='bg-bg'
               error={errors.region?.message || region}
               >
               <Selectbox
                 className='w-100'
                 data={state.addresses}
                 name='region'
                 onChange={(e) => {
                    let re = state.addresses.find(x => x.id == e.target.value);
                    setRegion(re.map)
                 }}
                 Ref={register({
                   required:{value:true,message:'reagion is required'}
                 })}
               />
              </FromGroup>
              {/* <small>{region}</small> */}
              <FromGroup 
               label={f({id:'choose-post'})} 
               className='w-50 pr-lg mb-sm' 
               bodyClass='bg-bg'
               error={errors.day?.message}
               >
               <Input type='text'
               Ref={register({
                required:{value:true,message:f({id:'post-requir'})}
              })} />
               
             
              </FromGroup>
              <FromGroup 
               label={f({id:'correct-addres'})} 
               className='w-50 pr-lg mb-sm' 
               bodyClass='bg-bg'
               error={errors.address?.message}
               >
                <Input 
                  name='address' 
                  type='text' 
                  Ref={register({
                    required:{value:true,message:f({id:'address-requir'})}
                  })}
                />
              </FromGroup>
              <FromGroup 
               label={f({id:'enter-number'})} 
               className='w-50 pr-lg mb-sm' 
               bodyClass='bg-bg'
               error={errors.phone?.message}
               >
                 <Selectbox
                   data={telData}
                   name='phone_prefix'
                   Ref={register()}
                 />
                <Input 
                  name='phone' 
                  type='tel' 
                  maxLength='7'  
                  Ref={register({
                    required:{value:true,message:f({id:'phone-requir'})},
                    pattern:{value:/^[0-9]{3}[0-9]{2}[0-9]{2}$/,message:f({id:'phone-patter'})},
                    maxLength:{value:7, message:f({id:'phone-len'})}
                  })}
                />
              </FromGroup>
            </div>
            <Link href='/'><a style={{ color: 'darkblue', textDecoration: 'underline' }}>{f({id:'definemap'})}</a></Link>
          </Card.Body>
          <Card.Footer style={{ justifyContent: 'flex-end' }}>
            <ButtonComponent type='submit' className='p-xs' label={f({id:'ord-pay'})} />
          </Card.Footer>
          </form>
          </Card>
          <Card className='p-sm bg-white coruier__cards br-lg'>
            <Card.Header text={<small style={{ fontSize: 'small' }}>{f({id:'payed-packages'})}</small>} />
            <Card.Body className='p-none table__scroll'>
              <Tabel
                th={dataHead}
                data={state.paidBatches.map(x => ({
                  track_number: x.track_number,
                  shop: x.shop,
                  category: x.category,
                  price: x.price,
                  weight: x.weight,
                  delivery_price: x.delivery_price
                }))}
                renderBody={(x, i) => {
                  return <td key={i}>{x}</td>
                }}
              />
            </Card.Body>
          </Card>
        <Card className='p-sm bg-white mt-sm coruier__cards br-lg'>
          <Card.Header text={f({id:'order-history'})} />
          <Card.Body className='p-none'>
            <div className='orders-container'>
              <div className='orders-container-head'>

              </div>
              {
                state.orderHistory.map((item) => (
                  <details className='orders-item-details' key={item.id}>
                    <summary className='order-item-summary'>
                      <div className='order-item-summary-head' >
                        <span style={{textAlign:'center'}}>No </span>
                        <span style={{textAlign:'center'}}>{f({id:'dateon'})}</span>
                        <span style={{textAlign:'center'}}>{f({id:'count'})}</span>
                        <span style={{textAlign:'center'}}>{f({id:'status'})}</span>
                      </div>
                    </summary>
                    <Tabel thClassName='bg-white' data={[item]} renderBody={(x, i) => {
                      if(!i==0){
                        return <td key={i++}  style={{textAlign:'center'}}>
                        <span>{x}</span>
                      </td>
                      }
                    }} />
                  </details>
                ))
              }

            </div>
          </Card.Body>
        </Card>
      </Main>
    </Page>
  )
}

const mapStateToProps = (state) => ({
  entry: state.entry
});

export default connect(mapStateToProps)(memo(AzerPost))
