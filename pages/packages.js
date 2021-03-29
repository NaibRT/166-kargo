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
           <Main>
             <Card className='bg-bg pb-sm'>
                 <Card.Header text='Aktiv bağlamalarım'/>
                 <Card.Body className='p-none'>
                     <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                       {
                         packages.map(p => (
                            <PackageItem item={p}/>
                          ))
                       }
                     </div>
                 </Card.Body>
                 <Card.Footer style={{justifyContent:'space-between'}}>
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
                   <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <FromGroup bodyClass='bg-white pl-xs' bodyStyle={{height:'44px',width:'200px'}} className='mr-xs'>
                            <Input placeholder='kodu əlavə et'/>
                            <ButtonComponent className='color-white bg-success' label='Təsdiqlə'/>
                        </FromGroup>
                       <ButtonComponent className='color-white bg-success mr-xs' label='Kartla ödə' endElement={<span className='color-white pl-sm'>&#8594;</span>}/>
                       <ButtonComponent label='Balansla ödə' endElement={<span className='color-black mr-xs pl-sm'>&#8594;</span>}/>
                   </div>
                 </Card.Footer>
             </Card>

             <Card className='p-sm'>
                 <Card.Header text='Sifariş tarixçəsi'/>
                 <Card.Body className='p-none'>
                   <Tabel
                    th={dataHead}
                    data={data}
                    renderBody={(x,i) => {
                        if(i===0){
                          return  <td key={i++}>
                                     <span className='color-err'>{x.split(',')[0]}</span>
                                     <span>{x.split(',')[1]}</span>
                                  </td>  
                        }
                        return  <td key={i++}>{x}</td>
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
