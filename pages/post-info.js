import Link from 'next/link'
import React from 'react'
import Card from '../components/card/card'
import PostItem from '../components/post_item/post-item'

function PostInfo() {
 return (
  <div className='post-info-page bg-bg'>
    <div className='container-fluid'>
      <div className='pip-container'>
        <main className='bg-white'>
          <Card className='p-sm'>
            <Card.Body>
              <div className="pip-img">
                <img src='./assets/images/img1.png'/>
                <div className='pip-date'><span>4 dekabr 2021 - 14:30</span></div>
              </div>
              <div className='pip-info'>
                <h3>166 kargo Afrika ofisi fəaliyyətə başladı</h3>
                <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
              </div>
            </Card.Body>
          </Card>
        </main>
        <aside className='bg-white'>
          <Card className='p-md'>
            <Card.Header text='digər yazılar'/>
            <Card.Body  style={{padding:0}}>
              <PostItem/>
              <PostItem/>
              <PostItem/>
              <PostItem/>
              <PostItem/>
              <PostItem/>
            </Card.Body>
            <Card.Footer text={<Link href=''>hamsını gör +</Link>}/>
          </Card>
        </aside>
      </div>
    </div>
  </div>
 )
}

export default PostInfo
