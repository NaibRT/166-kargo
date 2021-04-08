import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { memo, useLayoutEffect, useState } from 'react'
import { connect } from 'react-redux'
import AsideMenu from '../components/aside-menu'
import Aside from '../components/aside/aside'
import ButtonComponent from '../components/button'
import Card from '../components/card/card'
import FromGroup from '../components/form-group/form-group'
import Input from '../components/input/input'
import Main from '../components/main/main'
import Page from '../components/page/page'
import Redirect from "../components/redirect/redirect"
import Tabel from '../components/tabel/tabel'
import { useIntl } from 'react-intl';





function CourierOrder(props) {

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
    paidBatches:[]
  });
  const { locale } = useRouter();

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
    })
   ]).then(res => {
       setState({
         orderHistory : res[0].data,
         paidBatches  : res[1].data
       })
   }).catch(err => console.log(err))
  })

  return (
    <Page className='bg-bg pt-lg pb-lg'>
      <Aside>
        <AsideMenu />
      </Aside>
      <Main className='bg-bg'>
        <Card className='p-sm bg-white'>
          <form>
          <Card.Header text={f({id:'courier-order'})} />
          <Card.Body className='p-none'>
            <p className='mb-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <FromGroup label={f({id:'choose-dist'})} className='w-50 pr-lg mb-sm' bodyClass='bg-bg'>
                <Input type='text' />
              </FromGroup>
              <FromGroup label={f({id:'choose-date'})} className='w-50 pr-lg mb-sm' bodyClass='bg-bg'>
                <Input type='date' />
              </FromGroup>
              <FromGroup label={f({id:'correct-addres'})} className='w-50 pr-lg mb-sm' bodyClass='bg-bg'>
                <Input type='text' />
              </FromGroup>
              <FromGroup label={f({id:'enter-number'})} className='w-50 pr-lg mb-sm' bodyClass='bg-bg'>
                <Input type='tel' />
              </FromGroup>
            </div>
            <Link href='/'><a style={{ color: 'darkblue', textDecoration: 'underline' }}>{f({id:'definemap'})}</a></Link>
          </Card.Body>
          <Card.Footer style={{ justifyContent: 'flex-end' }}>
            <ButtonComponent type='submit' className='w-25' label={f({id:'makeorder'})} />
          </Card.Footer>
          </form>
          </Card>
          
          <Card className='p-none bg-white'>
            <Card.Header text={<small style={{ fontSize: 'small' }}>{f({id:'payed-packages'})}</small>} />
            <Card.Body className='p-none'>
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
        <Card className='p-sm bg-white mt-sm'>
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
                        <span style={{textAlign:'center'}}>{f({id:'date'})}</span>
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

export default connect(mapStateToProps)(memo(CourierOrder))
