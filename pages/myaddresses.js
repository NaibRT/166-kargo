import axios from "axios"
import { useRouter } from "next/router"
import React, { memo, useLayoutEffect, useState } from 'react'
import { connect } from "react-redux"
import AddressItem from '../components/address-item'
import AsideMenu from '../components/aside-menu'
import Aside from '../components/aside/aside'
import Card from '../components/card/card'
import Main from '../components/main/main'
import Page from '../components/page/page'
import Redirect from "../components/redirect/redirect"

function Test(props) {
    if(!props.entry.isLoged){
        return <Redirect/>
      }

    const {locale} = useRouter()
    const [addresses,setAddresses] = useState({
        data:[],
        isLoaded:false
    })
    useLayoutEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}addresses?lan=${locale}`,{
            headers: {
                       'Content-Type': 'application/json',
                       'Accepts':'application/json',
                       'Authorization':`Bearer ${props.entry.user.accessToken}`
                     }
          }).then(res => {
            setAddresses({
                data:[...res.data.map(x => ({ 
                    id:x.id,
                    address: JSON.parse(x.address),
                    name:x.name,
                    abbr:x.abbr,
                    currency:x.currency 
                }))],
                isLoaded:true
            })
          }).catch(err => {
              console.log(err)
          })
    },[])


    return (
        <div className='bg-bg'>
            <Page>
                <Aside style={{ marginTop: '40px' }}>
                    <AsideMenu />
                </Aside>
                <Main style={{background:'none'}}>
                <div>
                    {
                      addresses.isLoaded && addresses.data.map(a => (
                            <Card className='p-md bg-white br-lg' style={{ margin: '40px 0 40px 40px' }}>
                        <Card.Header style={{ justifyContent: 'flex-start' }}
                            startElement={<img src={'/assets/icons/turkish.svg'} className='fl' />}
                            text={`${a.name} Ünvanı`}
                        />

                        <Card.Body className='bg-bg lg'>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                                {
                                    Object.keys(a.address).map((key, index) => {
                                        if(index === 0){
                                            return (
                                                <AddressItem style={{ flex: '1 1 30%' }} title={key} label={`${props.entry.user.user.firstname} ${props.entry.user.user.lastname}`} key={index} />
                                            )
                                        }else{
                                            return (
                                                <AddressItem style={{ flex: '1 1 30%' }} title={key} label={a.address[key]} key={index} />
                                             )
                                        }
                                    }
                                    )
                                }
                            </div>
                        </Card.Body>
                       </Card>
                     ))
                    }

                </div>
                </Main>

            </Page>
            <div className='bg-white'></div>
        </div>
    )
}

const mapStateToProps = state => ({
    entry: state.entry
});
export default connect(mapStateToProps)(memo(Test))
