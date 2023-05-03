import Image from "next/image";
import locationicon from '../../../../public/images/header/location.png';
import mobilemenu from '../../../../public/images/header/mobilemenu.png';
const Navber = () =>
{
    return(<div className="flex justify-between ml-4 mr-10 my-4 ">                
                <div className="flex cursor-pointer">
                    <p className=""> لطفا شهر خود را انتخاب کنید </p>
                    <Image src={locationicon} width={20} height={20}
                           className="ml-2" />
                </div>

                <div>
                    <ul className="flex">
                        <li className="mx-4 cursor-pointer hover:border-b border-red-600">  !در دیجیکالا بفروشید  </li>
                        <li className="mx-4 cursor-pointer hover:border-b border-red-600">  سوالی دارید؟ </li>
                        <li className="mx-4 cursor-pointer hover:border-b border-red-600 pl-3" style={{ borderLeft:"1px solid lightgray" }}> شگفت انگیزها  </li>
                        <li className="mx-4 cursor-pointer hover:border-b border-red-600"> تخفیف ها و پیشنهادها  </li>
                        <li className="mx-4 cursor-pointer hover:border-b border-red-600"> پرفروش ترین ها  </li>
                        <li className="mx-4 cursor-pointer hover:border-b border-red-600 pr-3" style={{ borderRight:"1px solid lightgray" }}> سوپر مارکت </li>
                        <p className="mr-3 cursor-pointer hover:border-b  border-red-600"> دسته بندی کالاها </p>
                        <Image src={mobilemenu} width={25} height={1} className="cursor-pointer" />
                    </ul>
                </div>
            </div>);
}

export default Navber;