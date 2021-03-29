import router from "next/router";
import React, { memo } from 'react';
import { connect } from "react-redux";
import AsideMenu from '../components/aside-menu';
import Aside from '../components/aside/aside';
import ButtonComponent from '../components/button';
import Card from '../components/card/card';
import Main from '../components/main/main';
import Page from "../components/page/page";
import Tabel from '../components/tabel/tabel';

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

function Lends(props) {

  if(!props.entry.isLoged){
    router.push('/register');
    return (
        <div style={{height:'100vh'}}></div>
    )
  }


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
                   <Card.Footer style={{justifyContent:'space-between',alignItems:'center'}}>
                       <h6 className='ml-xs'>Sizin Borcunuz 3 TRY təşkil edir</h6>
                     <ButtonComponent label='Borcu ödə'/>
                   </Card.Footer>
               </Card>
            </Main>
        </Page>
    )
}

const mapStateToProps = state => ({
  entry: state.entry
});

export default connect(mapStateToProps)(memo(Lends)) 
