import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { memo, useEffect, useLayoutEffect, useState } from 'react'
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
    addresses:[],
    total:0.0
  });
  const { locale } = useRouter();
  const {register,handleSubmit,errors} = useForm();

  useLayoutEffect(() => {
   Promise.all([
    // axios.get(`${process.env.NEXT_PUBLIC_API_URL}kuryers?lan=${locale}`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${props.entry.user.accessToken}`
    //   }
    // }),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}batches/paidPost?lan=${locale}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.entry.user.accessToken}`
      }
    }),
     axios.get(`${process.env.NEXT_PUBLIC_API_URL}azerpost/addresses`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.entry.user.accessToken}`
      }
     })
   ]).then(res => {
       setState({
        //  orderHistory : res[0].data,
         ...state,
         paidBatches  : res[0].data,
         addresses    : res[1].data.map(x => ({...x,name:`${x.address} - ${parseFloat(x.price).toFixed(2)}`}))
       })
   }).catch(err => console.log(err))
  
  }, []);

  useEffect(() => {
    let price = state.addresses[0]?.price;
    calculateTotal(price || 0)
  },[state.addresses])

  const calculateTotal = (price) => {
    let w = state.paidBatches.reduce((total, x) => { return parseFloat(total) + parseFloat(x.weight)},0);
    setState({
      ...state,
      total: w > 1 ? (Math.floor(w) * 0.8 + parseFloat(price)) : parseFloat(price)
    })
  }
 const submit = (data) => {
  if(state.paidBatches.length > 0){
    let newData = {
      ...data,
      phone: data.phone_prefix + data.phone
    }
   axios.post(`${process.env.NEXT_PUBLIC_API_URL}azerpost/odeme?lan=${locale}`,newData, {
     headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${props.entry.user.accessToken}`
     }
   }).then(res => {
     console.log(res.data)
        window.location = res.data.url;
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
               error={errors.region?.message}
               >
               <Selectbox
                 className='w-100'
                 data={state.addresses}
                 name='region'
                 onChange={(e) => {
                    let price = state.addresses.find(a => a.id == e.target.value).price
                    calculateTotal(price)
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
               error={errors.indeks?.message}
               >
               <Input 
               type='text'
               name='indeks'
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
          <Card.Footer style={{ justifyContent:'space-between',aliginItems:'center'}}>
            <span className='mt-xs'>
              {state.total} azn
            </span>
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
