import React from 'react'
import AddressItem from '../components/address-item'
import AsideMenu from '../components/aside-menu'
import Card from '../components/card/card'
import Page from '../components/page/page'

export default function test() {
    const data = {
        ["Ad,Soyad"]: "Nihad Abdual",
        ["Adress Satır 1"]:"Barbaros mah.178 Sk. Kardeşler apt. No:30/A 540728 llayev",
        ["Adress Satır 2"]:"166 Cargo Lojistik Limited",
        ["İl"]:"İstanbul",
        ["Ilce"]:"Bagcilar",
        ["Semt"]:"Barbaros",
        ["ZIP/Postal"]:"34203",
        ["TC Kimlik"]:"333333333",
        ["Cep Telefonu"]:"+9055555555",
        ["Vergi Numarasi"]:"5525255",
        ["Vergi Dairesi"]:"Kocasinan",
        ["Adres Basligi"]:"166 Cargo"
    }
    return (
       <div className='bg-bg'>
        <Page >
       <div style={{display:'flex'}}> 
            <AsideMenu />
            <div>
            <Card className='p-md bg-white lg' style={{margin: '40px 0 40px 40px'}}>
            <Card.Header style={{justifyContent:'flex-start'}}
                         startElement ={<img src={'/assets/icons/turkish.svg'} className='fl'/>}
                         text='Türkiyə Ünvanı'
                         />

            <Card.Body className='bg-bg lg'>
            <div style={{display:'flex', flexWrap:'wrap'}}>
            {
            Object.keys(data).map((key, index)=>(
                <AddressItem style={{flex:'1 1 30%'}} title={key} label={data[key]} key={index}/> 
            )
            )}
            </div>
            </Card.Body>
        </Card>
       
        <Card className='p-md bg-white lg' style={{margin: '40px 0 40px 40px'}}>
        <Card.Header style={{justifyContent:'flex-start'}}
                     startElement ={<img src={'/assets/icons/usa.svg'} className='fl'/>}
                     text='Amerika Ünvanı'
                     />

        <Card.Body className='bg-bg lg'>
        <div style={{display:'flex', flexWrap:'wrap'}}>
        {
        Object.keys(data).map((key, index)=>(
            <AddressItem style={{flex:'1 1 30%'}} title={key} label={data[key]} key={index}/> 
        )
        )}
        </div>
        </Card.Body>
    </Card>
   
            </div>
           </div>
        </Page>
        <div className='bg-white'></div>
        </div>
    )
}
