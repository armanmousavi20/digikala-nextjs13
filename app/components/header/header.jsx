import Image from "next/image";
import './header.css';
import Navber from "./navbar/navbar";
import HeaderImg from '../../../public/images/header/topheader.jpg';
import shoppingcart from '../../../public/images/header/shoppingcart.png';
import searchicon from '../../../public/images/header/searchicon.png';
import logo from '../../../public/images/header/logo.svg';
import arrowicon from '../../../public/images/header/arrowicon.png';

const Header = () =>{
    return(<div className="mx-3">
                <Image src={HeaderImg} className="w-full overflow-x-hidden" height={50}   />            
                <div className="flex items-center px-3 mt-3 justify-between h-14">            
	              	  <div className="flex w-[600px]">
	            	       <Image src={shoppingcart} width={40} height={10} className='px-1 mr-1 cursor-pointer' />
						   <div className="border-l-2 p-0">
	                       <button className="flex border rounded-[10px] p-2 mx-5 border-solid  border-black-400">
	                         <span className="mx-1"> ورود  </span>
	                         <span className="mx-1"> | </span> 
	                        <span className="mx-1">ثبت نام   </span>
							<Image src={arrowicon} width={15} height={15} className='ml-3 mt-1'  />	                         
	                     </button>
						 </div>
	                  </div>
	                <div className="w-full">
	                     <form className="flex ml-[12rem] grow-3 w-[600px] bg-gray-200 rounded-[8px] px-4">
	                         <input type="text" placeholder="جستجو"  className="flex-auto bg-gray-200 w-[400px] outline-none text-right mx-3 h-10 rounded-[8px]"/>
                             <button type='submit'>
							      <Image src={searchicon} width={15} height={5} classname="flex-none cursor-pointer" />
							 </button>
	                     </form>
	                </div>
                    
	                <div className="w-[200px] cursor-pointer mx-9">
	                    <Image src={logo} width={120} height={120} />
	                </div>   
	            </div> 

				<Navber />     
				<hr />          
           </div>);
}
export default Header;
