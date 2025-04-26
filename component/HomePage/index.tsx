
import React from "react";
import Card1 from "../Cardx/Card1";
import { ArrowRight } from "lucide-react";
import ShowCard from "../Show-card";

interface LearningMaterials {
    image:string;
    id:number;
    category:string;
    title:string;
    typeCard:string;
}
export default function HomePage(){

    const learningMaterials:LearningMaterials[]=[
        
        {image:"https://sachgiaokhoa.vn/pub/media/catalog/product/cache/3bd4b739bad1f096e12e3a82b40e551a/s/g/sgt.toan5t1_31_01_2024_v15.jpg",id:1,category:"Sách",title:"Sách giáo khoa",typeCard:"card1"},
        {image:"https://sachgiaokhoa.vn/pub/media/catalog/product/cache/3bd4b739bad1f096e12e3a82b40e551a/s/g/sgt.toan5t1_31_01_2024_v15.jpg",id:2,category:"Sách",title:"Sách giáo khoa",typeCard:"card1"},
        {image:"https://sachgiaokhoa.vn/pub/media/catalog/product/cache/3bd4b739bad1f096e12e3a82b40e551a/s/g/sgt.toan5t1_31_01_2024_v15.jpg",id:3,category:"Sách",title:"Sách giáo khoa",typeCard:"card1"},
        {image:"https://sachgiaokhoa.vn/pub/media/catalog/product/cache/3bd4b739bad1f096e12e3a82b40e551a/s/g/sgt.toan5t1_31_01_2024_v15.jpg",id:4,category:"Sách",title:"Sách giáo khoa",typeCard:"card1"},
        {image:"https://sachgiaokhoa.vn/pub/media/catalog/product/cache/3bd4b739bad1f096e12e3a82b40e551a/s/g/sgt.toan5t1_31_01_2024_v15.jpg",id:5,category:"Sách",title:"Sách giáo khoa",typeCard:"card1"},

        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:1,category:"Bộ đề",title:"Đề toán lớp 1",typeCard:"card1"},
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:2,category:"Bộ đề",title:"Bộ đề tuyển sinh vào 10 môn Toán",typeCard:"card1"},
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:3,category:"Bộ đề",title:"Toán: Đề 1 tuần 13",typeCard:"card1"},
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:4,category:"Bộ đề",title:"Bộ đề tiếng anh",typeCard:"card1"},
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:5,category:"Bộ đề",title:"Đề thi thử Tiếng Anh",typeCard:"card1"},

        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:1,category:"Video",title:"Ngữ văn 8 - Trong lòng mẹ-Tiết 1",typeCard:"card2"},
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:2,category:"Video",title:"Bài giảng mẫu tiếng anh tiểu học",typeCard:"card2"},
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:3,category:"Video",title:"Toán lớp 1 - Các số 7 8 9",typeCard:"card2"},
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:4,category:"Video",title:"Bài 12 tích phân",typeCard:"card2"},
        
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:1,category:"3D/VR",title:"Trái đất 3D",typeCard:"card1"},
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:2,category:"3D/VR",title:"Hệ tiêu hóa ở người",typeCard:"card1"},
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:3,category:"3D/VR",title:"Hệ hô hấp 3D",typeCard:"card1"},
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:4,category:"3D/VR",title:"Hệ thống cơ",typeCard:"card1"},
         
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:1,category:"Hình ảnh",title:"Dụng cụ học tập",typeCard:"card2"},
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:2,category:"Hình ảnh",title:"Bản đồ giấy",typeCard:"card2"},
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:3,category:"Hình ảnh",title:"Sơ đồ mô tả sự trao đổi khí qua khí khổng",typeCard:"card2"},
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:4,category:"Hình ảnh",title:"Dinh độc lập",typeCard:"card2"},
        
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:1,category:"Âm thanh",title:"Bài giảng Elearning âm nhạc 6",typeCard:"card2"},
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:2,category:"Âm thanh",title:"Bản đồ giấy",typeCard:"card2"},
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:3,category:"Âm thanh",title:"Sơ đồ mô tả sự trao đổi khí qua khí khổng",typeCard:"card2"},
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:4,category:"Âm thanh",title:"Dinh độc lập",typeCard:"card2"},

        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:1,category:"Scorm/xAPI",title:"Học liệu Scorm/xAPI",typeCard:"card2"},
        {image:"https://hocmai.vn/kho-tai-lieu/documents/1592963868/page-1.png",id:2,category:"Scorm/xAPI",title:"Tiếng anh thì hiện tại đơn",typeCard:"card2"},
        
    ]

   return (
    <main className="bg-gray-200 w-full h-full">
<ShowCard learningMaterials={learningMaterials} 
    category="Sách"
    />
    <ShowCard learningMaterials={learningMaterials} 
    category="Bộ đề"
    />
    <ShowCard learningMaterials={learningMaterials} 
    category="Video"
    />
    <ShowCard learningMaterials={learningMaterials} 
    category="3D/VR"
    />
    <ShowCard learningMaterials={learningMaterials} 
    category="Hình ảnh"
    />
     <ShowCard learningMaterials={learningMaterials} 
    category="Âm thanh"
    />
     <ShowCard learningMaterials={learningMaterials} 
    category="Scorm/xAPI"
    />
    </main>
    
    )
}
