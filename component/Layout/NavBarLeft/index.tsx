import { BookOpen, ChevronUp, Dot, History, House, LayoutGrid, Library, MessageCircle, NotepadText, Presentation, Settings, Users } from "lucide-react";
import React from "react";

export default function NavBarLeft(){
return (   

  <div className=" relative  flex flex-col w-[300px] h-full border-r-1 border-gray-300 ">
  <div className="h-[250px] border-b-1 border-gray-300 flex flex-col gap-1 p-3">
    <div className="flex gap-2 font-large hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md"> <House size={20} strokeWidth={1.75} /><span>Trang chủ </span></div>
    <div className="flex gap-2 font-medium hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md"> <BookOpen size={20} strokeWidth={1.75} absoluteStrokeWidth /> <span>Bộ sách </span></div>
    <div className="flex gap-2 font-medium hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md"> <LayoutGrid size={20} strokeWidth={1.75} absoluteStrokeWidth /><span> Kho học liệu</span></div>
    <div className="flex gap-2 font-medium hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md"><Users size={20} strokeWidth={1.75} absoluteStrokeWidth /><span> Diễn đàn</span></div>
    <div className="flex gap-2 font-medium hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md"><NotepadText size={20} strokeWidth={1.75} absoluteStrokeWidth /><span> Tin tức</span></div>
    </div>
  <div  className="h-[250px] border-b-1 border-gray-300 " >
    <div className=" flex py-2  gap-1 my-1 mx-3 justify-center items-center hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md">
    <Library size={20} />
      <span className="pr-20 text-nowrap font-medium hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md">Thư viện của tôi </span>
      <ChevronUp size={17} />
      </div>
    <ul className="px-5 py-2 flex flex-col gap-3 ">
      <li className="font-medium hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md"><span>Đã tạo</span></li>
      <li className="font-medium hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md"><span>Yêu thích</span></li>
      <li className="font-medium hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md"><span>Được chia sẻ</span></li>
      <li className="font-medium hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md"><span>Bộ sưu tập</span></li>
    </ul>
  </div>
  <div  className="h-[170px] border-b-1 border-gray-300 ">
   <div className="flex gap-2 px-5 py-4">
   <Presentation size={20} />
    <span>Lớp học</span></div>
    <div className="flex flex-col items-center justify-between">
<span className="text-sm text-gray-400 p-1">Chưa có lớp học nào</span>
<div className="py-1 px-2 text-sm border-1 border-gray-400 rounded-lg"><span>Tham gia lớp học</span></div>
    </div>
  </div>
  <div  className="h-[150px] ">
    <div className="flex py-2  gap-1 my-1 mx-3 overflow-hidden items-center hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md">
    <History size={20} />
      <span className="pr-20 text-nowrap font-medium hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md">Gần đây</span>
      <ChevronUp size={17} />
      </div>
    <ul className="px-5 py-2 flex flex-col gap-3 overflow-auto  h-[calc(100%-70px)] flex-3">
      <li className="font-medium hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md"><span>Toán 8 - Tập 1</span></li>
      <li className="font-medium hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md"><span>Tiếng Anh 8 - Tập 1</span></li>
      <li className="font-medium hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md"><span>Khoa học tự nhiên 8</span></li>
      <li className="font-medium hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md"><span>Ngữ văn 8 - tập 1</span></li>
    </ul>
  </div>
  <div className="h-[100px] border-t border-gray-600 flex flex-col gap-2 p-4">
    <div className="flex gap-2">
      <Settings size={20} strokeWidth={1.75} />
      <span>Hướng dẫn</span>
    </div>
    <div className="flex gap-2">
      <MessageCircle size={20} strokeWidth={1.75} />
      <span>Trợ giúp</span>
      <div className="flex border rounded-xl border-gray-300 p-1">
        <Dot size={20} color="#329a3e" strokeWidth={1.75} />
        <span>Online</span>
      </div>
    </div>

  </div>
</div>
)
}