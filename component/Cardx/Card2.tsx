import React from "react"
import Image from "next/image";
interface Card2Props {
    image:string;
    title:string;
}
function Card2({image,title}:Card2Props){
    console.log(image)
    return(
        <div className="h-[208px] w-[262px]">
            <div className="h-[148px]">
            { <Image
            width={262} height={208}
src={image} alt="Sach"
/> }
            </div>
            <div className="h-[60px] ">
            <span>
    {title}
</span>
            </div>
        </div>
    )
}
export default Card2