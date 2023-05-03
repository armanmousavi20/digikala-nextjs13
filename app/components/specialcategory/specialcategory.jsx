import Image from 'next/image';
import img1 from '../../../public/images/specialcat/1.jpeg';
import img2 from '../../../public/images/specialcat/2.jpg';
import img3 from '../../../public/images/specialcat/3.jpeg';
import img4 from '../../../public/images/specialcat/4.jpg';
import img5 from '../../../public/images/specialcat/5.jpg';
import img6 from '../../../public/images/specialcat/6.jpg';
import img7 from '../../../public/images/specialcat/7.jpg';
import img8 from '../../../public/images/specialcat/8.jpg';
import img9 from '../../../public/images/specialcat/9.jpg';

const SpecialCategory = () =>
{
    return(<div className='flex justify-between mx-4 my-4'>
               <div>
               <Image src={img9} width={85} height={85} 
                      className='border-2 border-red-600 p-1 rounded-full cursor-pointer'/>
                      <p className='mt-1 font-bold'> وسایل کمپ  </p>
               </div>

               <div>
               <Image src={img8} width={85} height={85} 
                      className='border-2 border-red-600 p-1 rounded-full cursor-pointer'/>
                      <p className='mt-1 font-bold'> قمقمه سفری  </p>
               </div>

               <div>
               <Image src={img7} width={85} height={85} 
                      className='border-2 border-red-600 p-1 rounded-full cursor-pointer'/>
                      <p className='mt-1 font-bold'> انواع دریل  </p>
               </div>

               <div>
               <Image src={img6} width={85} height={85} 
                      className='border-2 border-red-600 p-1 rounded-full cursor-pointer'/>
                      <p className='mt-1 font-bold'> کارت بازی   </p>
               </div>

               <div>
               <Image src={img5} width={85} height={85} 
                      className='border-2 border-red-600 p-1 rounded-full cursor-pointer'/>
                      <p className='mt-1 font-bold'> دکور جدید  </p>
               </div>

               <div>
               <Image src={img4} width={85} height={85} 
                      className='border-2 border-red-600 p-1 rounded-full cursor-pointer'/>
                      <p className='mt-1 font-bold'> سینما  </p>
               </div>

               <div>
               <Image src={img3} width={85} height={85} 
                      className='border-2 border-red-600 p-1 rounded-full cursor-pointer'/>
                      <p className='mt-1 font-bold'> پوست جدید  </p>
               </div>

               <div>
               <Image src={img2} width={85} height={85} 
                      className='border-2 border-red-600 p-1 rounded-full cursor-pointer'/>
                      <p className='mt-1 font-bold'>  گوشی موبایل </p>
               </div>

               <div>
               <Image src={img1} width={85} height={85} 
                      className='border-2 border-red-600 p-1 rounded-full cursor-pointer'/>
                      <p className='mt-1 font-bold'> خاطره انگیز </p>
               </div>
                 
           </div>)
}

export default SpecialCategory;