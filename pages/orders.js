import router from 'next/router';
import React, { memo } from 'react';
import { connect } from "react-redux";
import AsideMenu from "../components/aside-menu/index";
import Aside from "../components/aside/aside";
import ButtonComponent from '../components/button';
import Card from '../components/card/card';
import Main from "../components/main/main";
import Page from "../components/page/page";
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

            router.push('/register');

            return (
                <div style={{height:'100vh'}}></div>
            )
        }

    return (
        <Page className='bg-bg pt-lg'>
          <Aside>
              <AsideMenu/>
          </Aside> 
          <Main>
            <Card className='p-sm'>
                <Card.Header text='Sifarişlərim' endElelment={<a href='./new-order'><ButtonComponent startElement={<span>&#x2b;</span>} label={'Yeni sifariş əlavə et'}/></a>}/>
                <Card.Body className='p-none'>
                   <div className='orders-container'>
                       <div className='orders-container-head'>
                           <span>Sifariş No</span>
                           <span>Ölkə</span>
                           <span>Sifariş tarixi</span>
                           <span>Yekun qiymət</span>
                           <span>Status</span>
                       </div>
                  <details className='orders-item-details'>
                      <summary className='order-item-summary'>
                          <div className='order-item-summary-head'>
                              <span>No 11481</span>
                              <span>Turkiye</span>
                              <span>11-02-21, 10:58</span>
                              <span>1250 TL</span>
                              <span>Ödənilib</span>
                              <span><span className='mr-xs'>&#128065;</span>Sifariş detallari</span>
                          </div>
                      </summary>
                      <Tabel th={dataHead} thClassName='bg-white' data={data} renderBody={(x,i) => {
                          if(i===0){
                            return  <td key={i++}>
                                       <span className='color-err'>{x.split(',')[0]}</span>
                                       <span>{x.split(',')[1]}</span>
                                    </td>  
                          }
                          return  <td key={i++}>{x}</td>
                      }}/>
                  </details>

                  <details className='orders-item-details'>
                      <summary className='order-item-summary'>
                          <div className='order-item-summary-head'>
                              <span>No 11481</span>
                              <span>Turkiye</span>
                              <span>11-02-21, 10:58</span>
                              <span>1250 TL</span>
                              <span>Ödənilib</span>
                              <span><span className='mr-xs'>&#128065;</span>Sifariş detallari</span>
                          </div>
                      </summary>
                      <Tabel th={dataHead} thClassName='bg-white' data={data} renderBody={(x,i) => {
                          if(i===0){
                            return  <td key={i++}>
                                       <span className='color-err'>{x.split(',')[0]}</span>
                                       <span>{x.split(',')[1]}</span>
                                    </td>  
                          }
                          return  <td key={i++}>{x}</td>
                      }}/>
                  </details>

                  <details className='orders-item-details'>
                      <summary className='order-item-summary'>
                          <div className='order-item-summary-head'>
                              <span>No 11481</span>
                              <span>Turkiye</span>
                              <span>11-02-21, 10:58</span>
                              <span>1250 TL</span>
                              <span>Ödənilib</span>
                              <span><span className='mr-xs'>&#128065;</span>Sifariş detallari</span>
                          </div>
                      </summary>
                      <Tabel th={dataHead} thClassName='bg-white' data={data} renderBody={(x,i) => {
                          if(i===0){
                            return  <td key={i++}>
                                       <span className='color-err'>{x.split(',')[0]}</span>
                                       <span>{x.split(',')[1]}</span>
                                    </td>  
                          }
                          return  <td key={i++}>{x}</td>
                      }}/>
                  </details>
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
