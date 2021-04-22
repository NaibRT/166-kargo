import axios from 'axios';
import { useRouter } from "next/router";
import React, { memo, useLayoutEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { connect } from "react-redux";
import AsideMenu from '../components/aside-menu/index';
import Aside from "../components/aside/aside";
import Balans from '../components/balance/balance';
import Card from '../components/card/card';
import Main from "../components/main/main";
import Page from '../components/page/page';
import Redirect from "../components/redirect/redirect";
import Tabel from '../components/tabel/tabel';


const data = [
  {
    "id": "2021-01-29 17:39:36",
    "balance": "6.00",
    "payment": "+6.00"
  },
  {
    "id": "2021-01-29 18:12:47",
    "balance": "12.00",
    "payment": "+6.00"
  }
]
function Balance(props) {

  if(!props.entry.isLoged){
    return <Redirect/>
   }
   
  const { formatMessage: f } = useIntl();
  const {locale} = useRouter();
  const {transactions,setTransaction} = useState([])

  useLayoutEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}balanceService?lan=${locale}`,{
      headers: {
        'authorization': `Bearer ${props.entry.user.accessToken}`
      }
    }).then(res => {
      setTransaction(res.data)
    }).catch(err => console.log(err))
  })
 
    return (
        <div className='bg-bg'>

            <Page >
                <Aside style={{marginTop:'40px'}}>
                    <AsideMenu />
                </Aside>
                <Main className='bg-bg p-none'>
                    <Balans balance={props.entry.user.user.agreement}/>
                <div className='mg-rr'>
                    <small style={{ display: 'block', color: '#D60000', marginBottom:'10px' }}>{f({ id: 'paybalance' })}</small>
                    <small style={{ display: 'block', color: '#D60000', marginBottom:'10px'  }}>{f({ id: 'refundable' })}</small>
                    <Card className="bg-white p-md br-lg">
                      <Card.Header text={f({id:"transaction"})}/>
                      <Card.Body className='f-mobile'>
                      <Tabel
                        th={[
                          f({id:"dateon"}),
                          f({id:"payment"}),
                          f({id:"balance-service"})
                        ]}
                         data={data.map(x => (
                           {
                             id: x.id,
                             payment: x.payment,
                             balance: x.balance
                           }
                         ))}
                        renderBody={(x,i) => {
                          return(
                            <td key={i}>{x}</td>
                          )
                        }}
                      />
                      </Card.Body>
                    </Card>
                </div>
                </Main>
            </Page>
        </div>
    )
}

const mapStateToProps = (state) => ({
  entry: state.entry
});

export default connect(mapStateToProps)(memo(Balance))
