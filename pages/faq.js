import axios from 'axios';
import React, { memo } from 'react';
import Page from '../components/page/page';
import Summary from '../components/summary/summary';
import { useIntl } from 'react-intl';

function Faq(props) {
  const { formatMessage: f } = useIntl();
    return (
        <Page className='bg-bg pb-lg pt-lg'>
            <main className='bg-white faq-page p-lg mt-md'>
               <div className='faq-head'>
                 <img style={{width:'300px'}} className='faq-head-img' src='./assets/images/faqq.svg'/>
                 <div className='faq-head-title'>
                     <h3>{f({id:'faq'})}</h3>
                          </div>
               </div>
               <div className='faq-body mt-md'>
                 {
                   props.data.map(x => (
                    <Summary key={x.id} item={x}/>
                   ))
                 }
               </div>
            </main>
        </Page>
    )
}


export async function getServerSideProps({locale}) {

  let responce = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}faq?lan=${locale}`);
  let data = responce.data
  return {
    props: {
     data
    },
  }

}

// const mapStateToProps = state => ({

// })
export default memo(Faq)
