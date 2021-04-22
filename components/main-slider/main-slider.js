import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function MainSlider({className}) {



   return(
    <Swiper
    spaceBetween={0}
    slidesPerView={1}
    responsive={true}
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
