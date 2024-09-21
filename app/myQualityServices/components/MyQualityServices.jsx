import React from "react";
import MyQualityServiceTable from "./MyQualityServiceTable";
import "../css/myQualityServices.css"

const MyQualityServices = () => {
  return (
    <div className="bg-black text-white px-10 py-20">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center items-center flex-col gap-5">
          <div className="serviceGradient text-6xl text-center font-bold">My Quality Services</div>
          <div className="text-center text-lg max-w-[40%]">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
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
