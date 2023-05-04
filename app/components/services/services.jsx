import Image from 'next/image';
import img1 from '../../../public/images/services/img1.png';
import img2 from '../../../public/images/services/img2.png';
import img3 from '../../../public/images/services/img3.png';
import img4 from '../../../public/images/services/img4.png';
import img5 from '../../../public/images/services/img5.png';
import img6 from '../../../public/images/services/img6.png';
import img7 from '../../../public/images/services/img7.png';
import img8 from '../../../public/images/services/img8.png';

const Services = () =>
{
    const services = [{img:img1 , id:1 , title: "دیجی کالا جت" },
                      {img:img2 , id:2 , title: "حراج جت"},
                      {img:img3 , id:3 , title: "دیجی پی" },
                      {img:img4 , id:4 , title: "خرید عمده و سازمانی"},
                      {img:img5 , id:5 , title: "خرید سر ماه"},
                       {img:img6 , id:6 , title: "کارت هدیه"},
                       {img:img7 , id:7 , title: "دیجی پلاس"},
                       {img:img8 , id:8 , title: "بیشتر"}]
    return(<div className='flex flex-row-reverse justify-between m-6 mx-16'>
               {services.map( (s) =>{
                return(<div key={s.id} className='flex flex-col justify-center items-center 
                                                  mb-2 cursor-pointer'>
                          <Image src={s.img} width={55} height={55} />
                          {s.title}
                      </div>);                
               } )}
           </div>)
}
export default Services;