import { AlignJustify, Bell, ChevronDown, Search } from "lucide-react"
import Image from "next/image"
import React from "react"
export default function Header(){
return ( 
      <div className="flex border-b-1 justify-between items-center border-gray-300 min-h-[72px]">
    <div className=" flex gap-1 ">
    <AlignJustify size={18} strokeWidth={1.75} className="ml-5 mt-2 text-gray-700" />
    <Image src="/images/gkebook-logo.png" width={70} height={120} alt=" gke book" className="ml-5" />

    </div>
    <div className="w-1/3">
    <div className="flex items-center bg-white border border-gray-300 rounded-lg p-2 shadow-sm w-full py-3 ml-20 ">
      <Search size={20} className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Tìm kiếm sách bài tập ,học liệu...."
        className="bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
      />
    </div>
    </div>
    <div className="mr-10">
    <div className="flex items-center gap-3">
     
      <button className="bg-white text-gray-800 border-gray-300 shadow-sm px-4 py-2 rounded-md text-sm border-1">
        Luyện tập
      </button>


      <div className="flex items-center gap-1 bg-blue-900 text-white px-3 py-2 rounded-md my-2 mr-6">
        <span className="text-sm">Tạo</span>
        <ChevronDown size={16} />
      </div>

     
      <div className="text-xl cursor-pointer ">
        <Bell size={18} />
      </div>

     
      <div>
        <img
          src="/images/robot.png"
          alt="User Avatar"
          className="w-9 h-9 rounded-full bg-gradient-to-r from-gray-800 ml-2 to-gray-300 cursor-pointer"
        />
      </div>
    </div>
    </div>
    </div>
    
)
}