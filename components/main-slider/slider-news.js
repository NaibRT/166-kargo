import React, { useEffect } from 'react';
import Swiper from 'swiper';
import NewsItem from '../news_item/news-item'

function NewsSlider() {

 useEffect(() => {

  const swiper = new Swiper('.swiper-container', {
   // Optional parameters

   direction: 'horizontal',
   // spaceBetween:'10'
   spaceBetween:0,
   effect:'slide',
   speed:500,
   centeredSlides:true,
   parallax:true,
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     dynamicBullets: true,

   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
  // autoplay:{
  //    delay:1000
  // },
   // And if we need scrollbar
   // scrollbar: {
   //   el: '.swiper-scrollbar',
   //   draggable:true,
   //   dragSize:10
   // },
 });
 }, [])


 return (

   <div className="swiper-container">
  <div className="swiper-wrapper">

    <div className="swiper-slide">
    <NewsItem />
    </div>
    <div className="swiper-slide">
    <NewsItem />
    </div>
    <div className="swiper-slide">
    <NewsItem />
    </div>

  </div>

  <div className="swiper-pagination"></div>
  <div className="swiper-button-prev"></div>
  <div className="swiper-button-next"></div>
  <div className="swiper-scrollbar"></div>
</div>
 )
}

export default NewsSlider
