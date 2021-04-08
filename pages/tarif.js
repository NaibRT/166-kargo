import { memo } from "react";
import { useIntl } from 'react-intl';
import axios from 'axios'
import Card from '../components/card/card';
import MobileRate from '../components/rate/m-rate';
import Rate from '../components/rate/rate';
import Main from '../components/main/main'
import Page from '../components/page/page'

const data = [
    {min:0,max:0.25,amount:1.66},
    {min:0.25,max:0.50,amount:3.00},
    {min:0.50,max:0.70,amount:4.00},
    {min:0.70,max:1.00,amount:4.50},
   ]
 function Tariff(props) {
    const { formatMessage: f } = useIntl();
 
    return (
        <div>
        <Main className='bg-bg main_b'>
          <Page>
          <Card className='mr-sm br-lg sm-mob bg-white for-desk-t' style={{width:'100%'}}>
          <Card.Header text={f({ id: 'tariff' })} />
          <Card.Body className='bg-bg p-sm br-sm'>
            <div className='bg-bg rate-container' style={{ display: 'flex',justifyContent:'space-between'}}>
              {
                <Rate data={props?.tariffs.filter(x => x.country === 'TÜRKİYƏ' && x.is_liquid===0).splice(0,4)} icon={'/assets/icons/turkish.svg'} headerText='TÜRKİYƏ' /> 
              }
              {
                <Rate data={props?.tariffs.filter(x => x.country === 'TÜRKİYƏ' && x.is_liquid===1).splice(0,4)} icon={'/assets/icons/turkish.svg'} headerText='Türkiyə (Maye)' />
              }
              {
                <Rate data={props?.tariffs.filter(x => x.country === 'ABŞ' && x.is_liquid===0).splice(0,4)} icon={'/assets/icons/usa.svg'} headerText='ABŞ' style={{marginRight:0}} />
              } 
            </div>
          </Card.Body>
         
        </Card>
        <Card.Body className='bg-bg p-xs br-sm for-mobile-t'>
        <Card.Header></Card.Header>
       <MobileRate data={data} text='Çəki' />
  </Card.Body>
          </Page>
        </Main>
         </div>
    )
}
export async function getStaticProps({locale}) {
     let tariffs = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}tariffs?lan=${locale}`);
  
    return {
      props: { 
       tariffs:tariffs.data
      }
    }
  
  }

  export default (memo(Tariff))
