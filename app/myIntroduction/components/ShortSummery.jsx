import React from "react";
import { myShortSummery } from "../../../assets/myDetails";

const ShortSummery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {myShortSummery.map((item) => {
        return (
          <div key={item.id} className="flex items-center justify-center p-2">
            <div className="xl:text-7xl lg:text-6xl text-5xl flex items-center justify-center text-[--short-description-number] font-bold">
              <div>{item.value}</div>
              <div>{item.valueIcon}</div>
            </div>
            <div className="text-xl mx-2 text-[--short-description-text]">
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
