import React, { memo } from 'react';
import ReactHtmlParser from "react-html-parser";
import { useIntl } from 'react-intl';
import { connect } from "react-redux";
import Card from '../components/card/card';
import Page from '../components/page/page';

function About(props) {
  const { formatMessage: f } = useIntl();
 
 return (
   
  <Page className='bg-bg'>
   <div className='about-page bg-white mt-lg mb-lg'>
    <Card>
      <Card.Body style={{width:'100%'}}>
      
      <div style={{display:'flex',justifyContent:"center", flexDirection:'column'}}>
      <img src='/assets/images/about.svg'/>
        <h1>{f({ id: 'about' })}</h1>
         
      </div>
         <div className='about-info'>
     

           {ReactHtmlParser(props.data.about)}
         </div>
       </Card.Body> 
    </Card>
    </div>
  </Page>
 )
}

const mapStateToProps = state => ({
  data: state.settings.data
})

export default connect(mapStateToProps)(memo(About)) 
