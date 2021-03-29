import React from 'react'
import { useIntl } from 'react-intl';
import Balans from '../components/balance/balance'
import Page from '../components/page/page'
import AsideMenu from '../components/aside-menu/index'
import Card from '../components/card/card'
import Aside from "../components/aside/aside";
import Main from "../components/main/main";

function Balance() {
  const { formatMessage: f } = useIntl();
 
    return (
        <div className='bg-bg'>

            <Page >
                <Aside style={{marginTop:'40px'}}>
                    <AsideMenu />
                </Aside>
                <Main className='bg-bg'>
                    <Balans />
                <div className='mg-rr'>
                    <small style={{ display: 'block', color: '#D60000', marginBottom:'10px' }}>{f({ id: 'paybalance' })}</small>
                    <small style={{ display: 'block', color: '#D60000', marginBottom:'10px'  }}>{f({ id: 'refundable' })}</small>
                    <Card className="bg-white p-md br-lg">
                    <h3 className='table__title'>{f({ id: 'transaction' })}</h3>
                    <table className="table table-striped ">
                    <thead>
                      <tr>
                        <th scope="col">№</th>
                        <th scope="col">{f({ id: 'date' })}</th>
                        <th scope="col">{f({ id: 'payment' })}</th>
                        <th scope="col">{f({ id: 'balance-service' })}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>12.02.2020</td>
                        <td>-15 AZN</td>
                        <td>0.00 AZN</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>12.02.2020</td>
                        <td>-15 AZN</td>
                        <td>0.00 AZN</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>12.02.2020</td>
                        <td>-15 AZN</td>
                        <td>0.00 AZN</td>
                      </tr>
                    </tbody>
                  
                  </table>
                    </Card>
                </div>
                </Main>
            </Page>
        </div>
    )
}

export default Balance
