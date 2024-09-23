import React from "react";
import { myQualityServices } from "../../../assets/myDetails";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import "../css/myQualityServices.css"

const MyQualityServiceTable = () => {
  return (
    <div>
      {myQualityServices.map((myQualityService) => {
        return (
          <div
            key={myQualityService.id}
            className="flex abc w-full items-center p-3 servicesTable"
          >
            <div className="w-[5%] text-2xl tableNumber">{myQualityService.value}</div>
            <div className="w-[20%] text-3xl font-bold">
              {myQualityService.title}
            </div>
            <div className="w-[50%] text-xl">{myQualityService.text}</div>
            <div className="w-[20%] flex justify-center">
              <SouthEastIcon className="scale-125" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyQualityServiceTable;
