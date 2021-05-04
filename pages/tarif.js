import axios from 'axios';
import { memo } from "react";
import { useIntl } from 'react-intl';
import Card from '../components/card/card';
import Main from '../components/main/main';
import Page from '../components/page/page';
import MobileRate from '../components/rate/m-rate';
import Rate from '../components/rate/rate';


 function Tariff(props) {
    const { formatMessage: f } = useIntl();
 
    return (
        <Page className='pt-lg pb-lg fh'>
          <Card className='mr-sm p-sm br-lg sm-mob bg-white rate-card' style={{width:'100%'}}>
          <Card.Header text={f({ id: 'tariff' })} />
          <Card.Body className='bg-bg p-sm br-sm'>
            <div className='bg-bg rate-container for-desk-t' style={{ display: 'flex',justifyContent:'space-between'}}>
              {
                <Rate style={{width:'33%'}} data={props?.tariffs.filter(x => x.country_id === 15 && x.is_liquid===0).splice(0,4)} icon={'/assets/icons/15.svg'} headerText={f({ id: 'turkey' })} /> 
              }
              {
                <Rate style={{width:'33%'}} data={props?.tariffs.filter(x => x.country_id === 15 && x.is_liquid===1).splice(0,4)} icon={'/assets/icons/15.svg'} headerText={f({ id: 'isluqidturkey' })} />
              }
              {
                <Rate style={{width:'33%'}} data={props?.tariffs.filter(x => x.country_id === 16 && x.is_liquid===0).splice(0,4)} icon={'/assets/icons/16.svg'} headerText={f({ id: 'usa' })}  />
              } 
              {
                <Rate style={{width:'33%'}} data={props?.tariffs.filter(x => x.country_id === 18 && x.is_liquid===0).splice(0,4)} icon={'/assets/icons/18.svg'} headerText={f({ id: 'ua' })}  />
              } 
            </div>
            <MobileRate data={props?.tariffs} />
          </Card.Body>
        </Card>
         </Page>
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
