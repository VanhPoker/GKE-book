import React from "react";
export default function Filter(){
return (   

    <div className="flex w-full ">
        <div className="flex flex-col">
            <span>Kho học liệu</span>
            <span>Tổng hợp học liệu hiện có trên hệ thống</span>
        </div>
        <div className="flex flex-col">
           
            <label htmlFor="level">Khối lớp</label>
<select name="level" id="level">
  <option value="Khoi 1">Khối 1 </option>
  <option value="Khoi 2">Khối 2</option>
  <option value="Khoi 3">Khối 3</option>
  <option value="Khoi 4">Khối 4</option>
  <option value="Khoi 5">Khối 5</option>
  <option value="Khoi 6">Khối 6</option>
  <option value="Khoi 7">Khối 7</option>
  <option value="Khoi 8">Khối 8</option>
  <option value="Khoi 9">Khối 9</option>
  <option value="Khoi 10">Khối 10</option>
  <option value="Khoi 11">Khối 11</option>
  <option value="Khoi 12">Khối 12</option>
</select>

        </div>
        <div></div>
        <div></div>
        <div></div>
    </div>
)
}