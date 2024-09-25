"use client";
import React, { useState } from "react";
import { myQualityServices } from "../../../assets/myDetails";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import "../css/myQualityServices.css";

const MyQualityServiceTable = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="">
      {myQualityServices.map((myQualityService) => {
        return (
          <div
            key={myQualityService.id}
            className="flex flex-col mb-2 rounded-xl hover:rounded-3xl hover:scale-[1.02] lg:flex-row w-full items-center p-3 servicesTable gap-4 lg:gap-0"
          >
            <div className="lg:w-[35%] flex gap-4 lg:gap-0">
              <div className="lg:w-[15%] font-bold text-xl  md:text-2xl lg:text-3xl xl:text-4xl tableNumber">
                {myQualityService.value}
              </div>
              <div className="lg:w-[85%] text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                {myQualityService.title}
              </div>
            </div>
            <div className="lg:w-[65%] flex gap-4 lg:gap-0 items-center text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              <div className="lg:w-[85%] whitespace-normal">{myQualityService.text}</div>
              <div
                className="lg:w-[15%] flex justify-center text-[--service-table-arrow]hover:text-[--service-table-arrow-hover] transition-all duration-500 ease-out scale-125 hover:scale-150"
                onMouseEnter={() => setHoveredId(myQualityService.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {hoveredId === myQualityService.id ? (
                  <NorthEastIcon />
                ) : (
                  <SouthEastIcon />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyQualityServiceTable;
