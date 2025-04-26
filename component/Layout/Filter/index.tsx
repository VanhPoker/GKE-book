import React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Funnel } from "lucide-react";
interface FilterProps{
  
     setChangeFilter: React.Dispatch<React.SetStateAction<boolean>>;
    changeFilter: boolean;
   
}
export default function Filter({setChangeFilter,changeFilter}:FilterProps){
    
return (   

    <div className={`flex ${changeFilter?"flex-col":"flex-row"} w-full gap-2  `}>
        <div className={`flex flex-col py-6 px-5 gap-2 w-[344px]`}>
            <span className="text-3xl text-blue-900 font-medium " >Kho học liệu</span>
            <span className="text-gray-500 text-nowrap">Tổng hợp học liệu hiện có trên hệ thống</span>
        </div>
        <div className={`flex gap-3  text-nowrap justify-center w-full items-center overflow-hidden`}>
        <div className="flex flex-col gap-2">
           <span> Khối lớp</span>
        <Select>
      <SelectTrigger className="w-[166px]">
        <SelectValue placeholder="Tất cả" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        <SelectItem value="grade1">Khối 1</SelectItem>
<SelectItem value="grade2">Khối 2</SelectItem>
<SelectItem value="grade3">Khối 3</SelectItem>
<SelectItem value="grade4">Khối 4</SelectItem>
<SelectItem value="grade5">Khối 5</SelectItem>
<SelectItem value="grade6">Khối 6</SelectItem>
<SelectItem value="grade7">Khối 7</SelectItem>
<SelectItem value="grade8">Khối 8</SelectItem>
<SelectItem value="grade9">Khối 9</SelectItem>
<SelectItem value="grade10">Khối 10</SelectItem>
<SelectItem value="grade11">Khối 11</SelectItem>
<SelectItem value="grade12">Khối 12</SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>

        </div>
        <div className="flex flex-col gap-2">
        <span>Môn học</span>
        <Select>
      <SelectTrigger className="w-[166px]">
        <SelectValue placeholder="Tất cả" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        <SelectItem value="grade1">Bộ môn</SelectItem>
        <SelectItem value="math">Toán</SelectItem>
<SelectItem value="vietnamese">Tiếng Việt</SelectItem>
<SelectItem value="english">Tiếng Anh</SelectItem>
<SelectItem value="literature">Ngữ Văn</SelectItem>
<SelectItem value="natural-science">Khoa học tự nhiên</SelectItem>
<SelectItem value="social-science">Khoa học xã hội</SelectItem>


        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        <div className="flex flex-col gap-2">
        <span> Trình độ</span>
        <Select>
      <SelectTrigger className="w-[166px]">
        <SelectValue placeholder="Tất cả" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        <SelectItem value="grade1">Cơ bản</SelectItem>
<SelectItem value="grade2">Trung bình </SelectItem>
<SelectItem value="grade3">Nâng cao</SelectItem>


        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        <div className="flex flex-col gap-2">
        <span> Ngôn ngữ</span>
        <Select>
      <SelectTrigger className="w-[166px] ">
        <SelectValue placeholder="Tất cả" className="text-black"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        <SelectItem value="grade1">Tiếng Việt</SelectItem>
<SelectItem value="grade2">Tiếng Anh</SelectItem>
<SelectItem value="grade3">Tiếng Hàn</SelectItem>
<SelectItem value="grade4">Tiếng Trung</SelectItem>
<SelectItem value="grade5">Tiếng Dubai</SelectItem>
<SelectItem value="grade6">Tiếng Campuchia</SelectItem>


        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        <div className="mt-7 ml-3">
            <button className="bg-blue-900 text-white p-3 rounded-lg ">
            <Funnel size={20} absoluteStrokeWidth />
            </button>
        </div>
        </div>
       
    </div>
)
}