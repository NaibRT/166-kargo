import axios from 'axios';
import router, { useRouter } from "next/router";
import React, { memo, useLayoutEffect, useState } from 'react';
import { connect } from "react-redux";
import AsideMenu from '../components/aside-menu';
import Aside from '../components/aside/aside';
import ButtonComponent from '../components/button';
import Card from '../components/card/card';
import Main from '../components/main/main';
import Page from "../components/page/page";
import Tabel from '../components/tabel/tabel';
const dataHead = [
  ' Sifariş N',
  'Borcun yaranma səbəbi',
  'Ödəniş'
  
];
 

function Lends(props) {

  if(!props.entry.isLoged){
    router.push('/register');
    return (
        <div style={{height:'100vh'}}></div>
    )

  }
console.log('lend',props)
const [lend, setLend]= useState([]);
const {locale} = useRouter();

useLayoutEffect(()=>{
  axios.get(`${process.env.NEXT_PUBLIC_API_URL}lends`,{
    headers:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${props.entry.user.accessToken}`
    }
  }).then(res=>{
    setLend(res.data)
  }).catch(err=>console.log(err))
},[])


    return (
        <Page className='bg-bg pt-sm'>
            <Aside className='mr-sm'>
              <AsideMenu/>
            </Aside>
            <Main>
               <Card className='p-sm'>
                   <Card.Header text='Borclarım'/>
                   <Card.Body className='p-none'>
                     <Tabel
                      th={dataHead}
                      data={lend}
                      renderBody={(x,i) => {
                        
                          return  <td key={i++}>
                                     <span>{x}</span>
                                  </td>  
                        
                 
                    }}
                     />
                   </Card.Body>
                   <Card.Footer className='footer__card'>
                       <h6 className='ml-xs mt-xs'>Sizin Borcunuz 3 TRY təşkil edir</h6>
                     <ButtonComponent className='size_btn' label='Borcu ödə'/>
                   </Card.Footer>
               </Card>
            </Main>
            <Card.Footer className='footer__cart'>
            <h6 className='ml-xs mb-xs'>Sizin Borcunuz 3 TRY təşkil edir</h6>
          <ButtonComponent className='size_btn_m' label='Borcu ödə'/>
        </Card.Footer>
        </Page>
    )
}

const mapStateToProps = state => ({
  entry: state.entry
});

export default connect(mapStateToProps)(memo(Lends)) 
