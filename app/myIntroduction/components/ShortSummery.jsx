import React from "react";
import { myShortSummery } from "../../../assets/myDetails";

const ShortSummery = () => {
  return (
    <div className="text-white flex justify-evenly">
      {myShortSummery.map((item) => {
        return (
          <div key={item.id} className="flex items-center  p-2">
            <div className="text-7xl flex items-center justify-center">
              <div>{item.value}</div>
              <div>{item.valueIcon}</div>
            </div>
            <div className="text-xl mx-2">
              <div>{item.text1}</div>
              <div>{item.text2}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShortSummery;
