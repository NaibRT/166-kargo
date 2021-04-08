import Link from 'next/link';
import React from 'react';

function PostItem({img,link,title,date,desc,className,bClassName}) {
 return (
   <div className={`post-item bg-bg ${className}`}>
      <Link href={link||''} >
   <a>
   <img className='br-sm' src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${img}`}/>
    <div className={`post-item-info ${bClassName}`}>
       { title && <h5>{title}</h5>}
       { date  && <small>{date}</small>}
       { desc  && <p>
         {
          desc
         }
        </p>
        }
    </div>
    </a>
  </Link>
  </div>

 )
}

export default PostItem
