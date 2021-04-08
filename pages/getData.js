import axios from 'axios'
import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import store from '../redux/store'
import Link from 'next/link'
import {
 getDataAction
} from '../redux/getData/getDataActions'
import { useIntl } from 'react-intl'
import Card from '../components/card/card'
import Rate from '../components/rate/rate'
import NewsItem from '../components/news_item/news-item'
import PostItem from '../components/post_item/post-item'



const data = [
  {min:0,max:0.25,amount:1.66},
  {min:0.25,max:0.50,amount:3.00},
  {min:0.50,max:0.70,amount:4.00},
  {min:0.70,max:1.00,amount:4.50},
 ]

function GetData(props) {
  const { formatMessage : f } = useIntl()
  useEffect(()=>{
    props.getDataAction('https://jsonplaceholder.typicode.com/posts',{});
  },[])
  
 return (
   <div>
<section className='container-fluid'>
<Card>
        <Card.Header text='Tarifler'/>
         <Card.Body className='bg-bg sm'>
           <div className='bg-bg' style={{display:'flex',justifyContent:'space-around',flexFlow:'wrap'}}>
             <Rate data={data} icon={'/assets/icons/turkish.svg'} headerText='Türkiyə'/>
             <Rate data={data} icon={'/assets/icons/turkish.svg'} headerText='Türkiyə (Maye)'/>
             <Rate data={data} icon={'/assets/icons/usa.svg'} headerText='ABŞ'/>
           </div>
         </Card.Body>
       </Card> 
</section>

<section className='container-fluid'>
 <Card>
   <Card.Header text='Son Xəbərlər' endElelment={<Link href=''>Hamsını gör &rsaquo;</Link>}/>
   <Card.Body style={{padding: 0, display:'flex',justifyContent:'space-between',flexFlow:'wrap'}}>
        <PostItem/>
   </Card.Body>
 </Card>
</section>

</div>
 )
}

const mapStateToProp = state => ({
  SpotifyReducer: state.SpotifyReducer
});

const mapDispatchToProp = { getDataAction }


export default connect(mapStateToProp, mapDispatchToProp)(React.memo(GetData))
