
import React from "react";
import Card1 from "../Cardx/Card1";
import { ArrowRight } from "lucide-react";
import Card2 from "../Cardx/Card2";
interface LearningMaterials {
    image:string;
    id:number;
    category:string;
    title:string;
    typeCard:string;
}
interface ShowCardProps {
    learningMaterials:LearningMaterials[];
    category:string;
}

export default function ShowCard({learningMaterials,category}:ShowCardProps){

   return (

    <div className="w-full h-[400px] ">
        <div className="flex ml-5 justify-between my-3">
        <p className="text-[#20447E] font-semibold text-[24px]">{category}</p>
       <div className="flex text-[14px] text-[#FF4405] gap-1"> <span>Xem thêm </span> <ArrowRight  size={20}/></div>
        </div>

<div className="grid grid-cols-5 gap-2 ml-5">
{learningMaterials.map(item =>
  item.category === category && item.typeCard==="card1" ? <Card1 title={item.title} image={item.image} key={item.id} /> : null
)}

</div>
<div className="grid grid-cols-4 gap-2 ml-5">
{learningMaterials.map(item =>
  item.category === category && item.typeCard==="card2" ? <Card2 title={item.title} image={item.image} key={item.id} /> : null
)}
</div>
    </div>
 
    )
}
