'use client';
import React from 'react';
import Image from 'next/image';

import img1 from '../../../public/images/slider/1.gif';
import img2 from '../../../public/images/slider/2.jpg';
import img3 from '../../../public/images/slider/3.jpg';
import img4 from '../../../public/images/slider/4.jpg';

import { Swiper , SwiperSlide } from 'swiper/react';
import SwiperCore , { Autoplay , Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Slider = () =>
{
     const images = [{title :img1 , id:1 } , 
                     {title :img2 , id:2 } , 
                     {title :img3 , id:3 } , 
                    {title :img4 , id:4 }]
    SwiperCore.use([Autoplay])
   // const navigationPrevRef = useRef(null);
  //  const navigationNextRef = useRef(null);    
    return(<div className='h-[350px]'>              
                <Swiper  modules={[Navigation, Pagination]}
                       spaceBetween={50} slidesPerView={1} navigation 
                       pagination={{ clickable : true }} loop={true} 
                       autoplay={{ delay:5000 }} 
                       onSwiper={(swiper) => console.log(swiper)}
                       onSlideChange={() => console.log('slide change')}>
                         {images.map( (img) => {
                              return(
                                 <SwiperSlide key={img.id} className='h-full'>               
                                    <Image src={img.title} width={1500} height={400} className='md:h-[350px]'  />
                                 </SwiperSlide>
                              )}
                              )}

                </Swiper>  
           </div>)
}
export default Slider;