import React from "react";
import MyQualityServiceTable from "./MyQualityServiceTable";
import "../css/myQualityServiceTable.css";
import { qualityService } from "../../../assets/qualityService";

const MyQualityServices = () => {
  return (
    <div className="bg-[--quality-services-bg] text-[--quality-services-text] px-10 py-20">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center items-center flex-col gap-5">
          <div className="serviceGradient text-3xl  md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center font-bold">
            {qualityService.title}
          </div>
          <div className="text-center text-md  md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl max-w-[75%]">
            {qualityService.text}
          </div>
        </div>
        <div>
          <MyQualityServiceTable />
        </div>
      </div>
    </div>
  );
};

export default MyQualityServices;
