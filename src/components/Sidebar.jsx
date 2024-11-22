import { RiHome6Line,
         RiDiscountPercentLine, 
         RiPieChartLine, 
         RiMailLine, 
         RiNotificationLine, 
         RiSettings3Line,
         RiLogoutBoxRLine} from "react-icons/ri";
 
export const Sidebar = (props) => {
    
    // eslint-disable-next-line react/prop-types
    const {showMenu} = props;
    
    return (
    <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-23 h-full 
                    rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full" }`}>
        
        <ul>
            <li>
            <h1 className="text-xl text-gray-300 uppercase font-bold text-center my-5">Logo</h1>
            </li>
           
            <li className="bg-[#262837] p-3 ml-4 rounded-tl-xl rounded-bl-xl mt-1" >
                <a href="#" className=" bg-[#ec7c6a] w-12 h-12 flex justify-center items-center p-3 rounded-xl text-white  ">
                    <RiHome6Line className="text-3xl"/>
                </a>
            </li>
            <li className="hover:bg-[#262837] p-3 ml-4 rounded-tl-xl rounded-bl-xl group transition-colors mt-1" >
                <a href="#" className="w-12 h-12 flex justify-center items-center p-3 rounded-xl text-[#ec7c6a] transition-color ">
                    <RiDiscountPercentLine className="text-3xl"/>
                </a>
            </li>
            <li className="hover:bg-[#262837] p-3 ml-4 rounded-tl-xl rounded-bl-xl group transition-colors mt-1" >
                <a href="#" className="w-12 h-12 flex justify-center items-center p-3 rounded-xl text-[#ec7c6a] transition-color ">
                    <RiPieChartLine className="text-3xl"/>
                </a>
            </li>
            <li className="hover:bg-[#262837] p-3 ml-4 rounded-tl-xl rounded-bl-xl group transition-colors mt-1" >
                <a href="#" className="w-12 h-12 flex justify-center items-center p-3 rounded-xl text-[#ec7c6a] transition-color ">
                    <RiMailLine className="text-3xl"/>
                </a>
            </li>
            <li className="hover:bg-[#262837] p-3 ml-4 rounded-tl-xl rounded-bl-xl group transition-colors mt-1" >
                <a href="#" className="w-12 h-12 flex justify-center items-center p-3 rounded-xl text-[#ec7c6a] transition-color ">
                    <RiNotificationLine className="text-3xl"/>
                </a>
            </li>
            <li className="hover:bg-[#262837] p-3 ml-4 rounded-tl-xl rounded-bl-xl group transition-colors mt-1" >
                <a href="#" className="w-12 h-12 flex justify-center items-center p-3 rounded-xl text-[#ec7c6a] transition-color ">
                    <RiSettings3Line className="text-3xl"/>
                </a>
            </li>
            <li className="hover:bg-[#262837] p-3 ml-4 rounded-tl-xl rounded-bl-xl group transition-colors mt-1" >
                <a href="#" className="w-12 h-12 flex justify-center items-center p-3 rounded-xl text-[#ec7c6a] transition-color ">
                    <RiLogoutBoxRLine className="text-3xl"/>
                </a>
            </li>
        </ul>
    </div>
  )
}
