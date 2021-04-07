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


const arr = [
  {
    "id": 1,
    "order_no": "100000",
    "date": "03-02-2021 11:32",
    "count": 2,
    "status": "Təhvil alınıb"
  },
  {
    "id": 3,
    "order_no": "100002",
    "date": "22-02-2021 11:31",
    "count": 1,
    "status": "Ləğv edilib"
  },
  {
    "id": 4,
    "order_no": "100003",
    "date": "04-02-2021 18:06",
    "count": 0,
    "status": "Sifariş verilib"
  },
  {
    "id": 5,
    "order_no": "100004",
    "date": "22-02-2021 11:14",
    "count": 1,
    "status": "Kuryerə təhvil verilib"
  },
  {
    "id": 6,
    "order_no": "100004",
    "date": "04-02-2021 22:27",
    "count": 1,
    "status": "Sifariş verilib"
  },
  {
    "id": 7,
    "order_no": "100005",
    "date": "04-02-2021 22:27",
    "count": 0,
    "status": "Sifariş verilib"
  },
  {
    "id": 8,
    "order_no": "100006",
    "date": "04-02-2021 22:27",
    "count": 0,
    "status": "Sifariş verilib"
  },
  {
    "id": 9,
    "order_no": "100007",
    "date": "04-02-2021 22:27",
    "count": 0,
    "status": "Sifariş verilib"
  },
  {
    "id": 10,
    "order_no": "100008",
    "date": "26-02-2021 13:42",
    "count": 1,
    "status": "Ləğv edilib"
  },
  {
    "id": 11,
    "order_no": "100009",
    "date": "20-03-2021 12:15",
    "count": 1,
    "status": "Ləğv edilib"
  },
  {
    "id": 12,
    "order_no": "100010",
    "date": "16-03-2021 23:08",
    "count": 2,
    "status": "Ləğv edilib"
  }
]

const dataHead = [
  'Tracking',
  'Mağaza',
  'Kateqoriya',
  'Malın dəyəri',
  'Çəki',
  'Çatdırılma'
];
const data = [
  {
    Tracking: 'OSS-182328, 89264824182328',
    shop: 'kolaygelsin',
    category: 'Geyim,blazer',
    amount: '239.99 TRY',
    weight: '1.200 kq',
    delivery: '4.78$ (8.12m)'
  },
  {
    Tracking: 'OSS-182328, 89264824182328',
    shop: 'kolaygelsin',
    category: 'Geyim,blazer',
    amount: '239.99 TRY',
    weight: '1.200 kq',
    delivery: '4.78$ (8.12m)'
  },
  {
    Tracking: 'OSS-182328, 89264824182328',
    shop: 'kolaygelsin',
    category: 'Geyim,blazer',
    amount: '239.99 TRY',
    weight: '1.200 kq',
    delivery: '4.78$ (8.12m)'
  }
]

function CourierOrder(props) {
  if(!props.entry.isLoged){
    return <Redirect/>
  }

  console.log('kuryer', props);
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

    // axios.get(`${process.env.NEXT_PUBLIC_API_URL}kuryers?lan=${locale}`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${props.entry.user.accessToken}`
    //   }
    // }).then(res => {
    //   setCourier(res.data)
    // }).catch(err => console.log('kurererror', err));

    // axios.get(`${process.env.NEXT_PUBLIC_API_URL}batches/paid?lan=${locale}`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${props.entry.user.accessToken}`
    //   }
    // }).then(res => {
    //   setCourier(res.data)
    // }).catch(err => console.log('kurererror', err))
  }, [])

  return (
    <Page className='bg-bg pt-lg pb-lg'>
      <Aside>
        <AsideMenu />
      </Aside>
      <Main className='bg-bg'>
        <Card className='p-sm bg-white'>
          <form>
          <Card.Header text='Kuryer sifarişi' />
          <Card.Body className='p-none'>
            <p className='mb-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <FromGroup label='Rayon seçin' className='w-50 pr-lg mb-sm' bodyClass='bg-bg'>
                <Input type='text' />
              </FromGroup>
              <FromGroup label='Vaxt seçin' className='w-50 pr-lg mb-sm' bodyClass='bg-bg'>
                <Input type='date' />
              </FromGroup>
              <FromGroup label='Dəqiq ünvan əlavə edin' className='w-50 pr-lg mb-sm' bodyClass='bg-bg'>
                <Input type='text' />
              </FromGroup>
              <FromGroup label='Əlaqə nömrəsi daxil edin' className='w-50 pr-lg mb-sm' bodyClass='bg-bg'>
                <Input type='tel' />
              </FromGroup>
            </div>
            <Link href='/'><a style={{ color: 'darkblue', textDecoration: 'underline' }}>Xəritədən təyin et</a></Link>
          </Card.Body>
          <Card.Footer style={{ justifyContent: 'flex-end' }}>
            <ButtonComponent type='submit' className='w-25' label='Sifariş ver' />
          </Card.Footer>
          </form>
          </Card>
          
          <Card className='p-none bg-white'>
            <Card.Header text={<small style={{ fontSize: 'small' }}>Ödənilmiş bağlamalar</small>} />
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
                  // if (i === 0) {
                  //   return <td key={i++}>
                  //     <span className='color-err'>{x.split(',')[0]}</span>
                  //     <span>{x.split(',')[1]}</span>
                  //   </td>
                  // }
                  return <td key={i}>{x}</td>
                }}
              />
            </Card.Body>
          </Card>
        <Card className='p-sm bg-white mt-sm'>
          <Card.Header text='Sifariş tarixçəsi' />
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
                        <span style={{textAlign:'center'}}>Tarix</span>
                        <span style={{textAlign:'center'}}>Say</span>
                        <span style={{textAlign:'center'}}>Status</span>
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
