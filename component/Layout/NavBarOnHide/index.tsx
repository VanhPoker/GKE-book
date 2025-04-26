import { BookOpen, ChevronUp, Dot, History, House, LayoutGrid, Library, MessageCircle, NotepadText, Presentation, Settings, Users } from "lucide-react";
import React from "react";

interface NavBarOnHideProps {
  setHideNav: React.Dispatch<React.SetStateAction<boolean>>;
  hideNav: boolean;
}
export default function NavBarOnHide({setHideNav,hideNav}:NavBarOnHideProps){
return (   

  <div className={` relative bg-white flex flex-col w-[70px] h-full border-r-1 text-gray-600 border-gray-300 transition-all duration-500   ${hideNav ? "" : "hidden"}  `}>
  <div className="h-[220px] border-b-1 justify-center items-center border-gray-200 flex flex-col gap-1 p-3 mx-2">
    <div className="flex gap-2 font-large hover:text-white hover:bg-[#0c2e47] px-3 py-2 border-0 rounded-md"> <House size={20} strokeWidth={1.75} /></div>
    <div className="flex gap-2 font-medium hover:text-white hover:bg-[#0c2e47] px-3 py-2 border-0 rounded-md"> <BookOpen size={20} strokeWidth={1.75} absoluteStrokeWidth /></div>
    <div className="flex gap-2 font-medium hover:text-white hover:bg-[#0c2e47] px-3 py-2 border-0 rounded-md"> <LayoutGrid size={20} strokeWidth={1.75} absoluteStrokeWidth /></div>
    <div className="flex gap-2 font-medium hover:text-white hover:bg-[#0c2e47] px-3 py-2 border-0 rounded-md"><Users size={20} strokeWidth={1.75} absoluteStrokeWidth /></div>
    <div className="flex gap-2 font-medium hover:text-white hover:bg-[#0c2e47] px-3 py-2 border-0 rounded-md"><NotepadText size={20} strokeWidth={1.75} absoluteStrokeWidth /></div>
    </div>
  <div  className="h-full border-b-1 border-gray-200 items-center justify-center py-2 mx-2 " >
    <div className=" flex py-2   mx-1 overflow-hidden items-center justify-center hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md">
    <Library size={20} />
      </div>
   
  </div>
  <div  className=" border-b-1 border-gray-200 mx-2 ">
   <div className="flex gap-2 px-3 justify-center py-4">
   <Presentation size={20} />
</div>
    <div className="flex flex-col items-center justify-between">

    </div>
  </div>
  <div className="h-[300px] items-center justify-center" >
    <div className="flex py-2   gap-1 my-1 mx-3 overflow-hidden items-center justify-center hover:text-white hover:bg-[#0c2e47] p-1.5 border-0 rounded-md">
    <History size={20} />
      </div>
    
  </div>
  <div className="h-[150px]  flex flex-col gap-2 p-4">
    <div className="flex gap-2 py-2 items-center justify-center hover:text-white hover:bg-[#0c2e47] rounded-md">
      <Settings size={20} strokeWidth={1.75} />
    </div>
    <div className="flex gap-2 py-2 items-center justify-center hover:text-white hover:bg-[#0c2e47] rounded-md">
      <MessageCircle size={20} strokeWidth={1.75} />
    </div>

  </div>
</div>
)
}