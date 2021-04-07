import axios from 'axios';
import router, { useRouter } from 'next/router';
import React, { memo, useLayoutEffect, useState } from 'react';
import { connect } from "react-redux";
import AsideMenu from "../components/aside-menu/index";
import Aside from "../components/aside/aside";
import ButtonComponent from '../components/button';
import Card from '../components/card/card';
import FromGroup from "../components/form-group/form-group";
import Input from "../components/input/input";
import Main from "../components/main/main";
import PackageItem from '../components/package_item/package-item';
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


function Packages(props) {

  console.log('props',props)

  if(!props.entry.isLoged){

    router.push('/register');

    return (
        <div style={{height:'100vh'}}></div>
    )
}

const [packages,setPackages] = useState([])
const {locale} = useRouter()


useLayoutEffect(()=> {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}batches?lan=${locale}`,{
    headers: {
      'authorization': `Bearer ${props.entry.user.accessToken}`
    }
  }).then(res => {
    setPackages(res.data)
  }).catch(err => console.log(err))
},[])


    return (
        <Page className='bg-bg pt-lg'>
           <Aside className='mr-sm'>
             <AsideMenu/>
           </Aside> 
           <Main className='bg-c'>
             <Card className='bg-bg pb-sm mgm_ss'>
                 <Card.Header text='Aktiv bağlamalarım'/>
                 <Card.Body className='p-none'>
                     <div className='packages__fr'>
                       {
                         packages.filter(x => x.status.id !== 6).map(p => (
                            <PackageItem item={p}/>
                          ))
                       }
                     </div>
                 </Card.Body>
                 <div className='footer__pck'>
                   <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                       <smal>2 bağlama seçilib</smal>
                       <div style={{display:'flex',justifyContent:'space-between'}}>
                           <b>Cəmi:</b>
                           <div style={{display:'flex',flexDirection:'column'}}>
                           <del style={{textDecorationColor:'red'}} >15.30 AZN</del>
                           <b>13.30 AZN</b>
                           </div>
                       </div>
                   </div>
                   <div className='package__btns'>
                        <FromGroup bodyClass='bg-white pl-xs '  className='mr-xs chng__bodystyle'>
                            <Input placeholder='kodu əlavə et'/>
                            <ButtonComponent style={{padding: '0 10px'}} className='color-white bg-success' label='Təsdiqlə'/>
                        </FromGroup>
                         
                       <ButtonComponent style={{padding: '0 10px'}} className='color-white bg-success mr-xs desk' label='Kartla ödə' endElement={<span className='color-white pl-sm'>&#8594;</span>}/>
                       <ButtonComponent style={{padding: '0 10px'}} className='desk' label='Balansla ödə' endElement={<span className='color-black mr-xs pl-sm '>&#8594;</span>}/>
                       
                        <div className='btn__fkl'>
                       <ButtonComponent style={{padding: '0 10px'}} className='color-white bg-success mr-xs' label='Kartla ödə' endElement={<span className='color-white pl-sm'>&#8594;</span>}/>
                       <ButtonComponent style={{padding: '0 10px'}} label='Balansla ödə' endElement={<span className='color-black mr-xs pl-sm'>&#8594;</span>}/>
                       </div>
                   </div>
                 </div>
             </Card>

             <Card className='p-sm bg-white'>
                 <Card.Header text='Sifariş tarixçəsi'/>
                 <Card.Body className='p-none overflow__package '>
                   <Tabel
                    th={dataHead}
                    data={data}
                    renderBody={(x,i) => {
                          return   <td key={i++}>{x}</td>  
                    }}
                   />
                 </Card.Body>
             </Card>
           </Main>
        </Page>
    )
}

const mapStateToProps = (state) => ({
  entry: state.entry
});

export default connect(mapStateToProps)(memo(Packages))
