import axios from "axios"
import Link from 'next/link'
import React from 'react'
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser"
import Aside from "../../components/aside/aside"
import Card from '../../components/card/card'
import Main from "../../components/main/main"
import Page from '../../components/page/page'
import PostItem from "../../components/post_item/post-item"




function PostInfo(props) {
  
 return (
      <Page className='bg-bg pt-lg fh'>
        <Main className='bg-white mr-sm'>
          <Card className='p-sm'>
            <Card.Body className='p-none'>
              <div className="pip-img">
                <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${props.currentNews.image}`} className='br-sm'/>
                <div className='pip-date'><span>{props.currentNews.created_at}</span></div>
              </div>
              <div className='pip-info'>
                <h3>{props.currentNews.title}</h3>
                <p>
                   {
                     ReactHtmlParser(props.currentNews.content,{
                       transform: (n) => convertNodeToElement(n)
                     })
                   }
                </p>
              </div>
            </Card.Body>
          </Card>
        </Main>
        <Aside className='bg-white'>
          <Card className='p-md'>
            <Card.Header text='digər yazılar'/>
            <Card.Body  style={{padding:0}}>
              {
                props.news.map(item => (
                 <PostItem 
                   img={item.image} 
                   title={item.title}
                   link={`/blog/${item.slug}`}
                   bClassName='bg-white'
                   className='bg-white'
                   />
                ))
              }
            </Card.Body>
            <Card.Footer text={<Link href=''><a>hamsını gör +</a></Link>}/>
          </Card>
        </Aside>
      </Page>
 )
}

export async function getStaticPaths() {

  let responce = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}news`);
  let data = responce.data;

  let paths = data.map(x => {
    return {
      params:{slug:[
         x.slug.toString()
        ]}
    }
  })


  return {
    paths:paths,
    fallback: false
  }

}



export async function getStaticProps({params,locale}) {
  let responce = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}news`);
  let res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}news/${params.slug[0]}?lan=${locale}`);
  return {
    props: {
      news: responce.data,
      currentNews: res.data,
    },
  }

}

export default PostInfo
