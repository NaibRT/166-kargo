import axios from 'axios';
import { useRouter } from "next/router";
import React, { memo, useLayoutEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { connect } from "react-redux";
import Swal from "sweetalert2";
import AsideMenu from '../components/aside-menu';
import Aside from '../components/aside/aside';
import ButtonComponent from '../components/button';
import Card from '../components/card/card';
import Main from '../components/main/main';
import Page from "../components/page/page";
import Redirect from "../components/redirect/redirect";
import Tabel from '../components/tabel/tabel';
import { PayByBalanceAction } from '../redux/entry/entryActions';

const dataFunc=()=>{
  const { formatMessage: f } = useIntl();

  const dataHead = [
    `${f({id:'orders'})}№`,
    f({id:'reason'}),
    f({id:'payment'})
  ];
  return dataHead
}
const dataFuncMob=()=>{
  const { formatMessage: f } = useIntl();

  const dataMobile = [
    `${f({id:'order'})}№`,
    f({id:'reason'}),
    f({id:'payment'})
  ]
  return dataMobile
}

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
  const { formatMessage: f } = useIntl();

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


  const PayLands = () => {
    Swal.fire({
      confirmButtonText: 'OK',
      showCancelButton: true,
      input: 'text'
    }).then(res => {
      if(res.isConfirmed){
        props.PayByBalanceAction('payment',{
          price:res.value.login,
          sourcetype:4
        },{
          'authorization': `Bearer ${props.entry.user.accessToken}`
        });
      }
    });
  }
  
  return (
    <Page className='bg-bg pt-sm'>
      <Aside className='mr-sm'>
        <AsideMenu />
      </Aside>
      <Main className='mobile__lend p-none'>
        <Card className='p-sm'>
          <Card.Header text={f({id:"lends"})} />
          <Card.Body className='p-none'>
            <Tabel
              th={dataFunc()}
              data={lend}
              renderBody={(x, i) => {

                return <td key={i++}>
                  <span>{x}</span>
                </td>
              }}
            />
          </Card.Body>
          <Card.Footer className='footer__card'>
            <h6 className='ml-xs mt-xs'></h6>
            <ButtonComponent onClick={PayLands} balance={props.entry.user.user.balance} className='size_btn' label={f({id:"paylend"})} />
          </Card.Footer>
        </Card>
      </Main>
     {/*Mobile lend design */}
      <Main className='mobile__lend__show'>
        <Card className='p-sm'>
          <Card.Header text={f({id:"lends"})} />
          <Card.Body className='p-none'>

              {
                lendw.map((s,i)=>{
                  return(
                    <table key={i}>
                     <thead>
                    <tr>
                      <td className='bg-bg p-md'>N{++i}</td>
                      <td className='bg-bg p-md'></td>
                    </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>{f({id:"reason"})}</th>
                        <td>{s.reason}</td>
                      </tr>
                      <tr>
                        <th>{f({id:"payment"})}</th>
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

const mapDispatchToProps = {
  PayByBalanceAction
}

export default connect(mapStateToProps,mapDispatchToProps)(memo(Lends))
