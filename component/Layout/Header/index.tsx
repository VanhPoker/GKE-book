import { AlignJustify, Bell, ChevronDown, Search } from "lucide-react"
import Image from "next/image"
import React from "react"
interface HeaderProps {
  setHideNav: React.Dispatch<React.SetStateAction<boolean>>;
  hideNav: boolean;
  is1024:boolean;
  is768:boolean;
}
export default function Header({setHideNav,hideNav,is1024,is768}:HeaderProps){
  const handleHideNav = () => {
    
    setHideNav(!hideNav);
  }
  {console.log(is1024)}
return ( 
      <div className="flex border-b-1 justify-between items-center border-gray-300 min-h-[72px]">
    <div className=" flex gap-1 w-1/3 ">
    <AlignJustify size={20} strokeWidth={1.75} className="ml-5 mt-2 text-gray-700 "  onClick={handleHideNav}/>
    <Image src="/images/gkebook-logo.png" width={64} height={32} alt=" gke book" className="ml-5" />

    </div>
    
    <div className="flex-1 max-w-[458px] mx-4">
   
    <div className={`flex items-center h-[48px] ${is1024?"w-[320px]":"w-[458px]"} ${is768?"hidden":""} bg-white border border-gray-300 rounded-lg p-2 shadow-sm  py-3  `}>
      <Search size={20} className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Tìm kiếm sách bài tập ,học liệu...."
        className="bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
      />
    </div>
    </div>
    <div className="mr-5">
    <div className="flex items-center gap-2 justify-center">
    <Search size={20} className={`text-gray-500 ${is768?"":"hidden"}`} />
      <button className="bg-white text-gray-800 text-nowrap border-gray-300 shadow-sm px-4 py-2 w-[99px] h-[40px] rounded-md text-sm border-1">
        Luyện tập
      </button>


      <div className="flex items-center gap-1 bg-blue-900 justify-center text-white px-3 py-2 w-[81px] h-[40px] rounded-md my-2 mr-3">
        <span className="text-sm">Tạo</span>
        <ChevronDown size={16} />
      </div>

     
      <div className="text-xl cursor-pointer mt-5 h-[36px] w-[25px]">
        <Bell size={20} />
      </div>

     
      <div>
        <img
          src="/images/robot.png"
          alt="User Avatar"
          className="h-[40px] w-[40px] rounded-full bg-gradient-to-r from-gray-800 mx-2 to-gray-300 cursor-pointer"
        />
      </div>
    </div>
    </div>
    </div>
    
)
}