import axios from "axios"
import Link from 'next/link'
import React from 'react'
import Card from '../components/card/card'
import Page from '../components/page/page'
import PostItem from '../components/post_item/post-item'
import { useIntl } from 'react-intl';

function Blog(props) {
  const { formatMessage: f } = useIntl(); 

 return (
  <div className='blog-page bg-bg fh'>
    <Page>
     <div className='blog-page-container'>
   <main className='bg-white br-lg' >
     <Card className='p-md blog-main-item'>
       <Card.Header text={props.news[0].title}/>
         <Card.Body className='br-sm' style={{padding:0}}>
          <Link href={`/blog/${props.news[0].slug}`}>
           <a>
           <img className='br-sm bg-bg' src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${props.news[0].image}`} width={'100%'} height={'300px'}/>
           </a>
          </Link>
         </Card.Body>
     </Card>
     <Card className='p-lg' style={{paddingTop:0}}>
       <Card.Header text={f({id:'other-articles'})}/>
       <Card.Body className='blog-post-container' style={{padding:0}}>
         {
           props.news.map((a) => (
             <PostItem  
               img={a.image} 
               title={a.title}
               desc={a.description}
               link={`blog/${a.slug}`}/>   
           ))
         }
       </Card.Body>
     </Card>
   </main>

   <aside className="bg-white br-lg">
   <Card className='p-sm'>
    <Card.Header text={f({id:'most-read'})}/>
    <Card.Body style={{padding:0}}>
      {
         props.news.slice(0,7).map((a) => (
          <PostItem 
           img={a.image} 
           link={`blog/${a.slug}`}
           title={a.title}
           bClassName='bg-white'
           className='bg-white'

           />   
        ))
      }
    </Card.Body>
   </Card>
   </aside>
   </div>
  </Page>
  </div>

 )
}


export async function getStaticProps({locale}) {

  let responce = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}news?lan=${locale}`);
  return {
    props: {
     news:responce.data
    },
  }

}

export default Blog
