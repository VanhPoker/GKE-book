import { Fullscreen } from "lucide-react";
import Image from "next/image";
import React from "react";
interface Card1Props {
    image:string;
    title:string;
}

function Card1 ({image,title}:Card1Props) {
  return (
  <div className="h-[340px]  border-0 rounded-2xl bg-white">
     <div className="h-[290px]">
<Image

src={image} alt="Sach"
className="border-0 rounded-t-2xl h-full w-full"
/>
     </div>
     <div className="h-[50px] justify-center items-center flex">
<span className="text-lg font-medium p-2">
    {title}
</span>
     </div>
  </div>
)
};

export default Card1


