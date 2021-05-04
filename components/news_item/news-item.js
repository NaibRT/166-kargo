import Link from "next/link";
import React from 'react';

function NewsItem({style,className,item}) {
 return (
    <Link href={`blog/${item.slug}/${item.id}`}>
       <a>
  <div className={`news-item bg-bg br-sm ${className}`} style={style}>
   <img className='br-sm' src={`${item.image}`}/>
    <div className='news-item-info'>
       <small>{item.created_at}</small>
       <h5>{item.title}</h5>
    </div>
  </div>
  </a>
  </Link>
 )
}

export default NewsItem
