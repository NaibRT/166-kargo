import axios from "axios"
import Link from 'next/link'
import React from 'react'
import Card from '../components/card/card'
import Page from '../components/page/page'
import PostItem from '../components/post_item/post-item'

function Blog(props) {
 return (
  <div className='blog-page bg-bg'>
    <Page >
     <div className='blog-page-container'>
   <main className='bg-white br-lg' >
     <Card className='p-md'>
       <Card.Header text={props.news[0].title}/>
         <Card.Body className='br-sm' style={{padding:0}}>
          <Link href={`/blog/${props.news[0].slug}`}>
           <a>
           <img className='br-sm bg-bg' src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${props.news[0].image}`} width={'100%'} height={'300px'}/>
           </a>
          </Link>
         </Card.Body>
     </Card>
     <Card className='p-sm' style={{paddingTop:0}}>
       <Card.Header text='Digər yazılar'/>
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
    <Card.Header text='Çox oxunanlar'/>
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
