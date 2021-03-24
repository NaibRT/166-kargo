import React from 'react'
import Balans from '../components/balance/balance'
import Page from '../components/page/page'
import AsideMenu from '../components/aside-menu/index'
import Card from '../components/card/card'

function Balance() {
    return (
        <div className='bg-bg'>
            <Page >

                <div style={{ display: 'flex' }}>
                    <AsideMenu />

                    <Balans />
                </div>
                <div>
                    <small style={{ display:'block',color: 'red' }}>Balansa artırdığınız məbləğ ilə yalnız çatdırılma haqqını ödəyə bilərsiniz!</small>

                    <small style={{ display:'block',color: 'red' }}> Ödənilən məbləğ geri qaytarılmır!</small>
                    <Card className="bg-white p-md"  >
                        <table>
                            <tr>
                                <th>Company</th>
                                <th>Contact</th>
                                <th>Country</th>
                            </tr>
                            <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Ernst Handel</td>
                                <td>Roland Mendel</td>
                                <td>Austria</td>
                            </tr>
                        </table>
                    </Card>
                </div>

            </Page>
        </div>
    )
}

export default Balance
