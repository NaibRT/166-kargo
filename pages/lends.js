import axios from 'axios';
import { useRouter } from "next/router";
import React, { memo, useLayoutEffect, useState } from 'react';
import { connect } from "react-redux";
import AsideMenu from '../components/aside-menu';
import Aside from '../components/aside/aside';
import ButtonComponent from '../components/button';
import Card from '../components/card/card';
import Main from '../components/main/main';
import Page from "../components/page/page";
import Redirect from "../components/redirect/redirect";
import Tabel from '../components/tabel/tabel';
const dataHead = [
  ' Sifariş N',
  'Borcun yaranma səbəbi',
  'Ödəniş'

];
const dataMobile = [
  '№',
  'Səbəbi',
  'Ödəniş'
]
const lendw =[
  {
    "id": 8,
    "reason": "Türkiyə daxili karqo borcu",
    "amount": "1.00"
  },
  {
    "id": 9,
    "reason": "Türkiyə daxili karqo borcu",
    "amount": "1.00"
  }
]
function Lends(props) {

  if (!props.entry.isLoged) {
    return <Redirect />
  }

  const [lend, setLend] = useState([]);
  const { locale } = useRouter();

  useLayoutEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}lends`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.entry.user.accessToken}`
      }
    }).then(res => {
      setLend(res.data)
    }).catch(err => console.log(err))
  }, [])


  return (
    <Page className='bg-bg pt-sm'>
      <Aside className='mr-sm'>
        <AsideMenu />
      </Aside>
      <Main className='mobile__lend'>
        <Card className='p-sm'>
          <Card.Header text='Borclarım' />
          <Card.Body className='p-none'>
            <Tabel
              th={dataHead}
              data={lend}
              renderBody={(x, i) => {

                return <td key={i++}>
                  <span>{x}</span>
                </td>
              }}
            />
          </Card.Body>
          <Card.Footer className='footer__card'>
            <h6 className='ml-xs mt-xs'>Sizin Borcunuz 3 TRY təşkil edir</h6>
            <ButtonComponent className='size_btn' label='Borcu ödə' />
          </Card.Footer>
        </Card>
      </Main>
     {/*Mobile lend design */}
      <Main className='mobile__lend__show'>
        <Card className='p-sm'>
          <Card.Header text='Borclarım' />
          <Card.Body className='p-none'>

              {
                lendw.map((s,i)=>{
                  return(
                    <table>
                    <tr>
                      <td className='bg-bg p-md'>N{++i}</td>
                      <td className='bg-bg p-md'></td>
                    </tr>
                    <tbody>
                      <tr>
                        <th>Səbəb</th>
                        <td>{s.reason}</td>
                      </tr>
                      <tr>
                        <th>Ödəniş</th>
                        <td>{s.amount}</td>
                      </tr>
                    </tbody>
                  </table>
    
               
                  )
                })
              }
          
          </Card.Body>
      
        </Card>
      
      </Main>
      <div className='w-100 mobi__lend'>
      <h6 className='ml-xs mt-xs'>Sizin Borcunuz 3 TRY təşkil edir</h6>
      <ButtonComponent className='size_btn' label='Borcu ödə' />
    </div>
    </Page>
  )
}

const mapStateToProps = state => ({
  entry: state.entry
});

export default connect(mapStateToProps)(memo(Lends))
