import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function MainSlider({className}) {

//  useEffect(() => {

//   const swiper = new Swiper('.swiper-container', {
//    // Optional parameters

//    direction: 'horizontal',
//    // spaceBetween:'10'
//    // If we need pagination
//    pagination: {
//      el: '.swiper-pagination',
//      dynamicBullets: true,

//    },
 
//    // Navigation arrows
//    navigation: {
//      nextEl: '.swiper-button-next',
//      prevEl: '.swiper-button-prev',
//    },
//   // autoplay:{
//   //    delay:1000
//   // },
//    // And if we need scrollbar
//    scrollbar: {
//      el: '.swiper-scrollbar',
//      draggable:true,
//      dragSize:10
//    },
//  });
//  }, [])

   return(
    <Swiper
    spaceBetween={0}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
   >
    <SwiperSlide><img src='/assets/images/slider.png' /></SwiperSlide>
    <SwiperSlide><img src='/assets/images/slider.png' /></SwiperSlide>
    <SwiperSlide><img src='/assets/images/slider.png' /></SwiperSlide>
    <SwiperSlide><img src='/assets/images/slider.png' /></SwiperSlide>
    ...
   </Swiper>
   )
//  return (

//    <div className={`swiper-container ${className || ''}`}>
//   <div className="swiper-wrapper">

//     <div className="swiper-slide">
//      <img src='/assets/images/slider.png' />
//     </div>
//     <div className="swiper-slide">
//      <img src='/assets/images/slider.png' />
//     </div>
//     <div className="swiper-slide">
//      <img src='/assets/images/slider.png' />
//     </div>

//   </div>

//   <div className="swiper-pagination"></div>
//   <div className="swiper-button-prev"></div>
//   <div className="swiper-button-next"></div>
//   <div className="swiper-scrollbar"></div>
// </div>
//  )
}

export default MainSlider
