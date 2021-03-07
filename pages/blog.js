import Link from 'next/link'
import React from 'react'
import Card from '../components/card/card'
import PostItem from '../components/post_item/post-item'

function Blog() {
 return (
  <div className='blog-page bg-bg'>
    <div className="container-fluid">
     <div className='blog-page-container'>

   <main className='bg-white' >
     <Card className='p-lg'>
       <Card.Header text="Artıq Amerikadan mebel sifarişi edə biləcəksiniz"/>
         <Card.Body className='sm' style={{padding:0}}>
          <Link href="">
           <a>
           <img className='sm bg-bg' src='./assets/images/img1.jpg' width={'100%'} height={'300px'}/>
           </a>
          </Link>
         </Card.Body>
     </Card>
     <Card className='p-lg' style={{paddingTop:0}}>
       <Card.Header text='Digər yazılar'/>
       <Card.Body className='blog-post-container' style={{padding:0}}>
           <PostItem/>
           <PostItem/>
           <PostItem/>
           <PostItem/>
           <PostItem/>
           <PostItem/>
       </Card.Body>
     </Card>
   </main>

   <aside className="bg-white">
   <Card className='p-sm'>
    <Card.Header text='Çox oxunanlar'/>
    <Card.Body style={{padding:0}}>
      <PostItem/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
    </Card.Body>
   </Card>
   </aside>
   </div>
  </div>
  </div>

 )
}

export default Blog
