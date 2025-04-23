import Image from "next/image"
import React from "react"
export default function Header(){
return (   <div className="flex border-b-1 border-gray-300 min-h-[60px]">
    <div className="w-1/3 flex ">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-justify-icon lucide-align-justify"><path d="M3 12h18"/><path d="M3 18h18"/><path d="M3 6h18"/></svg>
    <Image src="/images/gkebook-logo.png" width={50} height={100} alt=" gke book" />

    </div>
    <div className="w-1/3 ">
    <input type="text" />
    </div>
    <div className="w-1/3 ">1</div>
    </div>)
}