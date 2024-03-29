import axios from 'axios';
import React, { memo } from 'react';
import ReactHtmlParser from "react-html-parser";
import { useIntl } from 'react-intl';
import Card from '../components/card/card';
import Page from '../components/page/page';
function About(props) {
  const { formatMessage: f } = useIntl();
 
 return (
   
  <Page className='bg-bg'>
   <div className='about-page bg-white mt-lg mb-lg w-100'>
    <Card>
      <Card.Body style={{width:'100%'}}>
      
      <div style={{display:'flex',justifyContent:"center", flexDirection:'column'}}>
      <img src='/assets/images/about.svg'/>
        <h1>{f({ id: 'about' })}</h1>
         
      </div>
         <div className='about-info'>
           {ReactHtmlParser(props.data[4].text)}
         </div>
       </Card.Body> 
    </Card>
    </div>
  </Page>
 )
}


// const mapStateToProps = state => ({
//   data: state.settings.data
// })

export async function getServerSideProps({locale}) {

  let responce = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}condition?lan=${locale}`);
  return {
    props: {
     data:responce.data
    },
  }
}

export default (memo(About)) 
