import axios from 'axios';
import Link from "next/link";
import { useRouter } from 'next/router';
import React, { memo, useLayoutEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { connect } from "react-redux";
import AsideMenu from "../components/aside-menu/index";
import Aside from "../components/aside/aside";
import ButtonComponent from '../components/button';
import Card from '../components/card/card';
import Main from "../components/main/main";
import Page from "../components/page/page";
import Redirect from "../components/redirect/redirect";
import Tabel from "../components/tabel/tabel";

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
                    Tracking:'OSS-182328, 89264824182328',
                    shop:'kolaygelsin',
                    category:'Geyim,blazer',
                    amount:'239.99 TRY',
                    weight:'1.200 kq',
                    delivery:'4.78$ (8.12m)'
                  },
                  {
                      Tracking:'OSS-182328, 89264824182328',
                      shop:'kolaygelsin',
                      category:'Geyim,blazer',
                      amount:'239.99 TRY',
                      weight:'1.200 kq',
                      delivery:'4.78$ (8.12m)'
                    },
                    {
                      Tracking:'OSS-182328, 89264824182328',
                      shop:'kolaygelsin',
                      category:'Geyim,blazer',
                      amount:'239.99 TRY',
                      weight:'1.200 kq',
                      delivery:'4.78$ (8.12m)'
                    }
            ]



function Orders(props) {
    if(!props.entry.isLoged){
        return <Redirect/>
    }
    const { formatMessage: f } = useIntl(); 
    const [orders, setOrders] = useState([]);
    const {locale} = useRouter();

    useLayoutEffect(() => {
        
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}orders?lan=${locale}`,{
                headers: {
                     'Content-Type':'application/json',
                      'Accepts': 'application/json',
                      'Authorization':` Bearer ${props.entry.user.accessToken}`
                }
            }).then(res => {
             setOrders(res.data)
         })
    },[])


    return (
        <Page className='bg-bg pt-lg pb-lg'>
          <Aside className='mr-sm'>
              <AsideMenu/>
          </Aside> 
          <Main>
            <Card className='p-sm order-card'>
                <Card.Header text={f({id:'orders'})} endElelment={
                <Link href='./new-order'>
                    <a>
                    <ButtonComponent className='p-xs' startElement={<span>&#x2b;</span>} label={f({id:'addneworder'})}/>
                    </a>
                </Link>}/>
                <Card.Body className='p-none'>
                   <div className='orders-container'>
                       <div className='orders-container-head'>
                           <span>{f({id:'orders'})} No</span>
                           <span>{f({id:'country'})}</span>
                           <span>{f({id:'order-history'})}</span>
                           <span>{f({id:'amount'})}</span>
                           <span>{f({id:'status'})}</span>
                       </div>
                       {
                           orders.map((item) => (
                            <details className='orders-item-details' key={item.id}>
                            <summary className='order-item-summary'>
                                <div className='order-item-summary-head'>
                                    <span>No {item.order_number}</span>
                                    <span>{item.country}</span>
                                    <span>{new Date(item.date).toLocaleDateString(locale)}</span>
                                    <span>{item.price} TL</span>
                                    <span>{item.status ?f({id:'payed'}) : f({id:'unpayed'})}</span>
                                    <span><span className='mr-xs'>&#128065;</span>{f({id:'order-detail'})}</span>
                                </div>
                            </summary>
                            <Tabel th={[
                                'ID',
                                f({id:'shop'}),
                                f({id:'amount'}),
                                f({id:'count'}),
                                f({id:'size'}),
                                f({id:'color'}),
                                f({id:'note'}),
                                f({id:'review'}),
                                f({id:'status'}),
                            ]} thClassName='bg-white' data={item.orders} renderBody={(x,i) => {
                                if(i==1){
                                  return  <td key={i++}>
                                            <Link href={`${x}`}><a><span style={{color:'darkblue'}}>Link</span></a></Link>
                                             {/* <span>{x.split(',')[1]}</span> */}
                                          </td>  
                                }else{
                                    return <td key={i++}>
                                            <span >{x}</span>
                                             {/* <span>{x.split(',')[1]}</span> */}
                                           </td> 
                                }
                            }}/>
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


const mapStateToProps = state => ({
    entry: state.entry,
})


export default connect(mapStateToProps)(memo(Orders))
