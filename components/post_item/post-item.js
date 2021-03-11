import Link from 'next/link'
import React from 'react'

function PostItem({}) {
 return (
   <div className='post-item bg-bg'>
      <Link href='' >
   <a>
   <img className='br-sm' src='./assets/images/img1.jpg'/>
    <div className='post-item-info'>
       <h5>166 kargo artıq afrikada ofisini açdı</h5>
       <small>4 dekabr 2021</small>
       <p>
        Türkiyə hava şirkəti tərkibində baterya olan malların daşınması
       </p>
    </div>
    </a>
  </Link>
  </div>

 )
}

export default PostItem
