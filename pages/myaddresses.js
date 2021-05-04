import axios from "axios"
import Link from 'next/link'
import { useRouter } from "next/router"
import React, { memo, useLayoutEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { connect } from "react-redux"
import AddressItem from '../components/address-item'
import AsideMenu from '../components/aside-menu'
import Aside from '../components/aside/aside'
import ButtonComponent from '../components/button/index'
import Card from '../components/card/card'
import Main from '../components/main/main'
import Page from '../components/page/page'
import Redirect from "../components/redirect/redirect"

function Test(props) {
    if(!props.entry.isLoged){
        return <Redirect/>
      }
    const { formatMessage: f } = useIntl(); 
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
        <div >
            <Page className='bg-bg pt-lg pb-lg'>
                <Aside className='mr-sm'>
                    <AsideMenu />
                </Aside>
                <Main className='bg-white p-none'>
                <div>
               <div className='mobile__bt pb-lg bg-bg'>
               <Link href="/balance">
               <a>
              <ButtonComponent style={{padding:'0 25px'}} className='w-100' label='Balansı artır' startElement={<img className='mr-xs' src="/assets/icons/el2.svg"/>}/>
               </a>
              </Link>
              <Link href="/new-order">
            <a>
           <ButtonComponent style={{padding:'0 35px'}}
            className='w-100' label='Sifariş et' 
            startElement={<img className='mr-xs' src="/assets/icons/el.svg"/>}  />
            </a>
           </Link>
               </div>
                    
                    {
                      addresses.isLoaded && addresses.data.map((a,i) => (
                            <Card key={i} className='p-sm  bg-white br-lg  ' >
                        <Card.Header style={{ justifyContent: 'flex-start' }}
                            startElement={<img src={`/assets/icons/${a.id}.svg`} className='fl' />}
                            text={`${a.name} ${f({id:'address'})}`}
                        />

                        <Card.Body className='bg-bg lg'>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                                {
                                    Object.keys(a.address).map((key, index) => {
                                        if(index === 0){
                                            return (
                                                <AddressItem style={{ flex: '1 1 30%' }} title={key} label={`${props.entry.user.user.firstname} ${props.entry.user.user.lastname}`} key={index} />
                                            )
                                        }else if(index===1){
                                           
                                            return (
                                                <AddressItem style={{ flex: '1 1 30%' }} title={key} label={a.address[key].replace('{CUSTOMER_ID}',`${props.entry.user.user.customer_number}`).replace(`{USER}`,`${props.entry.user.user.firstname} ${props.entry.user.user.lastname}`)} key={index} />
                                             )
                                        }
                                        else if(index===2){
                                           
                                            return (
                                                <AddressItem style={{ flex: '1 1 30%' }} title={key} label={a.address[key].replace('{CUSTOMER_ID}',`${props.entry.user.user.customer_number}`).replace(`{USER}`,`${props.entry.user.user.firstname} ${props.entry.user.user.lastname}`)} key={index} />
                                             )
                                        }else if(index===Object.entries(a.address).length-1){
                                            return(
                                                <AddressItem style={{ flex: '1 1 30%' }} title={key} label={a.address[key].replace('{CUSTOMER_ID}',`${props.entry.user.user.customer_number}`)} key={index} />
                                            
                                            )
                                        }
                                        
                                        else{
                                            return(
                                                <AddressItem style={{ flex: '1 1 30%' }} title={key}  label={a.address[key]} key={index}/>
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
