import Link from 'next/link';
import React from 'react';

function PostItem({item,link}) {
 return (
   <div className='post-item bg-bg'>
      <Link href={link||''} >
   <a>
   <img className='br-sm' src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.image}`}/>
    <div className='post-item-info'>
       <h5>{item?.title}</h5>
       <small>{item?.created_at}</small>
        <p>
         {
          item?.description
         }
        </p>
    </div>
    </a>
  </Link>
  </div>

 )
}

export default PostItem
