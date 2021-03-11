import React from 'react'

function NewsItem({style,className}) {
 return (
  <div className={`news-item bg-bg br-sm ${className}`} style={style}>
   <img className='br-sm' src='./assets/images/img1.jpg'/>
    <div className='news-item-info'>
       <small>4 dekabr 2021</small>
       <h5>166 kargo artıq afrikada ofisini açdı</h5>
    </div>
  </div>
 )
}

export default NewsItem
