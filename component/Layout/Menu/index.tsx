import { Box, File, FileKey, Headphones, ListTodo, Play, Presentation, Puzzle } from "lucide-react";
import React from "react";
export default function Menu(){
return (   

    <div className="text-nowrap overflow-hidden">
      <div className="flex  items-center justify-between  ">
          <div className="flex gap-2 pl-3 justify-center border-b-3 basis-1/3 border-white hover:border-b-3 hover:border-orange-500 py-2 focus:border-b-3 focus:text-orange-500 focus:border-orange-500 text-gray-500 hover:text-orange-500" tabIndex={0}>
             <p>Tất cả</p>
          </div>
          <div className="flex gap-2 pl-3 justify-center border-b-3 basis-1/3 border-white hover:border-b-3 hover:border-orange-500 py-2 focus:border-b-3 focus:text-orange-500 focus:border-orange-500 text-gray-500 hover:text-orange-500"tabIndex={0}>
             <ListTodo  size ={20}  strokeWidth={1.75} /><p>Bộ đề</p>
          </div>
          <div className="flex gap-2 pl-3 justify-center border-b-3 basis-1/3 border-white hover:border-b-3 hover:border-orange-500 py-2 focus:border-b-3 focus:text-orange-500 focus:border-orange-500 text-gray-500 hover:text-orange-500"tabIndex={0}>
          <Presentation /> <p >Bài tập </p>
          </div>
          <div className="flex gap-2 pl-3 justify-center border-b-3 basis-1/3 border-white hover:border-b-3 hover:border-orange-500 py-2 focus:border-b-3 focus:text-orange-500 focus:border-orange-500 text-gray-500 hover:text-orange-500" tabIndex={0}>
          <FileKey /><p> Scorm/xAPI</p>
          </div>
          <div className="flex gap-2 pl-3 justify-center border-b-3 basis-1/3 border-white hover:border-b-3 hover:border-orange-500 py-2 focus:border-b-3 focus:text-orange-500 focus:border-orange-500 text-gray-500 hover:text-orange-500"tabIndex={0}>
          <File /> <p >Tài liệu</p>
          </div>
          <div className="flex gap-2 pl-3 justify-center border-b-3 basis-1/3 border-white hover:border-b-3 hover:border-orange-500 py-2 focus:border-b-3 focus:text-orange-500 focus:border-orange-500 text-gray-500 hover:text-orange-500"tabIndex={0}>
          <Headphones /> <p >Âm thanh</p>
          </div>
          <div className="flex gap-2 pl- justify-center border-b-3 basis-1/3 border-white hover:border-b-3 hover:border-orange-500 py-2 focus:border-b-3 focus:text-orange-500 focus:border-orange-500 text-gray-500 hover:text-orange-500"tabIndex={0}>
          <Play /> <p >Video</p>
          </div>
          <div className="flex gap-2 pl-3 justify-center border-b-3 basis-1/3 border-white hover:border-b-3 hover:border-orange-500 py-2 focus:border-b-3 focus:text-orange-500 focus:border-orange-500 text-gray-500 hover:text-orange-500"tabIndex={0}>
          <Box /> <p >3D/VR</p>
          </div>
          <div className="flex gap-2 pl-3 justify-center border-b-3 basis-1/3 border-white hover:border-b-3 hover:border-orange-500 py-2 focus:border-b-3 focus:text-orange-500 focus:border-orange-500 text-gray-500 hover:text-orange-500"tabIndex={0}>
          <Puzzle /> <p >Quizz</p>
          </div>
        </div>
    </div>
)
}