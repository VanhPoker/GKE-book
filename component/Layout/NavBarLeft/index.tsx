import { BookOpen, ChevronDown, ChevronUp, CircleSmall, Dot, History, House, LayoutGrid, Library, MessageCircle, NotepadText, Presentation, Settings, Users } from "lucide-react";
import React, { useState } from "react";

interface NavBarLeftProps {
  setHideNav: React.Dispatch<React.SetStateAction<boolean>>;
  hideNav: boolean;
}

export default function NavBarLeft({setHideNav,hideNav}:NavBarLeftProps){
  const [hideLibrary,setHideLibrary]= useState<boolean>(false)
  const [hideRecently,setHideRecently]= useState<boolean>(false)
  const handleHideLibrary =()=>{
    setHideLibrary(!hideLibrary)
  }
  const handleHideRecently =()=>{
    setHideRecently(!hideRecently)
  }
return (   

  <div className={` relative  flex flex-col w-[296px] h-[952px] border-r-1 border-gray-300 ${hideNav ? "hidden" : ""}  `}>
  <div className="h-[250px] border-b-1 border-gray-300 flex flex-col gap-1 p-3">
    <div className="flex gap-2 font-medium hover:text-white hover:bg-[#0c2e47] p-2 border-0 rounded-md"> <House size={20} strokeWidth={1.75} /><span>Trang chủ </span></div>
    <div className="flex gap-2 font-medium hover:text-white hover:bg-[#0c2e47] p-2 border-0 rounded-md"> <BookOpen size={20} strokeWidth={1.75} absoluteStrokeWidth /> <span>Bộ sách </span></div>
    <div className="flex gap-2 font-medium hover:text-white hover:bg-[#0c2e47] p-2 border-0 rounded-md"> <LayoutGrid size={20} strokeWidth={1.75} absoluteStrokeWidth /><span> Kho học liệu</span></div>
    <div className="flex gap-2 font-medium hover:text-white hover:bg-[#0c2e47] p-2 border-0 rounded-md"><Users size={20} strokeWidth={1.75} absoluteStrokeWidth /><span> Diễn đàn</span></div>
    <div className="flex gap-2 font-medium hover:text-white hover:bg-[#0c2e47] p-2 border-0 rounded-md"><NotepadText size={20} strokeWidth={1.75} absoluteStrokeWidth /><span> Tin tức</span></div>
    </div>
  <div  className={` border-b-1 bg-white border-gray-300 ${hideLibrary? "h-[240px]":"h-[50px]"} `} >
    <div className=" flex py-1  gap-1 my-1 mx-3 justify-center items-center hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md" onClick={handleHideLibrary}>
    <Library className="text-gray-500" size={20} />
      <span className="pr-20 text-nowrap font-medium hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md">Thư viện của tôi </span>
      {hideLibrary?<ChevronUp size={17} className="text-gray-500" />:<ChevronDown size={17} className="text-gray-500" />}
      </div>
    <ul className={`px-5 py-2 flex flex-col gap-3 h-[180px] ${hideLibrary?"":"hidden"}`}>
      <li className="font-medium pl-3 ml-3  hover:text-white hover:bg-[#0c2e47] h-[44px] p-1 border-0 rounded-md"><span>Đã tạo</span></li>
      <li className="font-medium pl-3 ml-3 hover:text-white hover:bg-[#0c2e47] h-[44px] p-1 border-0 rounded-md"><span>Yêu thích</span></li>
      <li className="font-medium pl-3 ml-3 hover:text-white hover:bg-[#0c2e47] h-[44px] p-1 border-0 rounded-md"><span>Được chia sẻ</span></li>
      <li className="font-medium pl-3 ml-3 hover:text-white hover:bg-[#0c2e47] h-[44px] p-1 border-0 rounded-md"><span>Bộ sưu tập</span></li>
    </ul>
  </div>
  <div  className="h-[140px] border-b-1 border-gray-300 ">
   <div className="flex gap-2 px-5 py-4  mt-1 items-center  hover:text-white hover:bg-[#0c2e47] h-[44px] p-1 border-0 rounded-md">
   <Presentation className="text-gray-500" size={20} />
    <span className="mr-32">Lớp học</span>
  
    </div>

    <div className="flex flex-col items-center justify-between">
<span className="text-sm text-gray-400 p-1">Chưa có lớp học nào</span>
<div className="py-1 px-2 text-sm border-1 border-gray-400 rounded-lg"><span>Tham gia lớp học</span></div>
    </div>
  </div>
  <div  className={`  ${hideRecently? "h-[224px]":"h-[60px]"} `}>
    <div className="flex py-2  gap-1 my-1 mx-3 overflow-hidden items-center hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md" onClick={handleHideRecently}>
    <History className="text-gray-500" size={20} />
      <span className="pr-20 text-nowrap font-medium hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md mr-13">Gần đây</span>
      {hideRecently?<ChevronUp size={17} className="text-gray-500"/>:<ChevronDown size={17} className="text-gray-500"/>}
      </div>
    <ul className={`px-5 py-2 flex flex-col  overflow-auto  h-[calc(100%-70px)] flex-3 ${hideRecently?"":"hidden"}`}>
      <li className="font-medium hover:text-white hover:bg-[#0c2e47] p-1.5  border-0 rounded-md"><span>Toán 8 - Tập 1</span></li>
      <li className="font-medium hover:text-white hover:bg-[#0c2e47] p-1.5  border-0 rounded-md"><span>Tiếng Anh 8 - Tập 1</span></li>
      <li className="font-medium hover:text-white hover:bg-[#0c2e47] p-1.5  border-0 rounded-md"><span>Khoa học tự nhiên 8</span></li>
      <li className="font-medium hover:text-white hover:bg-[#0c2e47] p-1.5  border-0 rounded-md"><span>Ngữ văn 8 - tập 1</span></li>
      
    </ul>
  </div>
  <div className="h-[112px] border-t fixed bottom-0 bg-white border-gray-300 flex flex-col gap-2 p-4">
    <div className="flex gap-2 ">
      <Settings className="text-gray-500" size={20} strokeWidth={1.75} />
      <span>Hướng dẫn</span>
    </div>
    <div className="flex gap-2 ">
      <MessageCircle className="text-gray-500" size={20} strokeWidth={1.75} />
      <span className="mr-20 mb-5">Trợ giúp</span>
      <div className="flex border rounded-xl justify-center items-center border-gray-300 h-[22px] w-[61px] pr-2">
      <CircleSmall className="text-gray-500 mr-0.5" size={8} color="green" fill="green"  absoluteStrokeWidth />
        <span className="text-xs ">Online</span>
      </div>
    </div>

  </div>
</div>
)
}