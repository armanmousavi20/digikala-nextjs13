'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import './slider2.css';

import Image from 'next/image'
import img from '../../../public/images/slider2/img.png';
import img1 from '../../../public/images/slider2/img1.jpg';
import img2 from '../../../public/images/slider2/img2.jpg';
import img3 from '../../../public/images/slider2/img3.jpg';
import img4 from '../../../public/images/slider2/img4.jpg';
import img5 from '../../../public/images/slider2/img5.jpg';
import img6 from '../../../public/images/slider2/img6.jpg';
import img7 from '../../../public/images/slider2/img7.jpg';
import img8 from '../../../public/images/slider2/img8.jpg';
import img9 from '../../../public/images/slider2/img9.jpg';
import img10 from '../../../public/images/slider2/img10.jpg';

     
     export default function Slider2() {
       const [swiperRef, setSwiperRef] = useState(null);     
     const products =[{ id:1 , img:img1 , mprice:2200 , discount:10 , dprice:2000  },
          { id:2 , img:img2 , mprice:2200 , discount:10 , dprice:2000  },
          { id:3 , img:img3 , mprice:33000 , discount:10 , dprice:30000  },
          { id:4 , img:img4 , mprice:55000 , discount:20 , dprice:44000  },
          { id:5 , img:img5 , mprice:30000 , discount:20 , dprice:24000  },
          { id:6 , img:img6 , mprice:25000 , discount:50 , dprice:12500  },
          { id:7 , img:img7 , mprice:35000 , discount:20 , dprice:28000  },
          { id:8 , img:img8 , mprice:120000 , discount:10 , dprice:108000  },
          { id:9 , img:img9 , mprice:1000000 , discount:25 , dprice:750000  }]     
       return (
         <div className="bg-red-500 m-4 rounded-[10px] border-2 border-black-400">          
           <Swiper
             onSwiper={setSwiperRef}
             slidesPerView={7}
             spaceBetween={10}
             navigation={true}
             modules={[Pagination, Navigation]}
             dir='rtl'
             className="mySwiper m-4"          
           >
               <SwiperSlide className="bg-red-500">
                    <div className=" flex flex-col justify-between">
                       <div className="flex flex-col text-white">  
                            <span> پیشنهاد    </span>
                            <span> شگفت   </span>
                            <span>انگیز  </span>
                       </div>
                       <Image src={img} width={100} height={100} className="my-4"/>
                       <span className="text-white cursor-pointer">  مشاهده همه {'>'} </span>
                    </div>
                </SwiperSlide>
               {products.map((p) =>{
                    return(<div className="w-[300px]">
                               <SwiperSlide className="flex flex-col bg-white cursor-pointer">
                                   <Image src={p.img} height={150} className="mt-0 mb-4" />
                                   <div>
                                   <span className="flex justify-between"> 
                                         <span className="bg-red-500 rounded-full p-1 ml-8"> %{p.discount} </span>
                                        <span className=""> {p.dprice} </span> <span className="mr-1"> تومان </span> 
                                    </span>                                                                      
                                   <span className="text-gray-400 line-through mr-20"> {p.mprice} </span>                                                                      
                                  </div>
                               </SwiperSlide>
                           </div>)                           
               })}

               <SwiperSlide className="bg-white ml-2">
                    <div className="flex flex-col cursor-pointer">
                         <Image src={img10} width={85} height={85} className="mb-4" />
                         مشاهده همه  
                    </div>
               </SwiperSlide>

           </Swiper>     
         </div>
       );
     }
     