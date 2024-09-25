import React from "react";
import { myShortSummery } from "../../../assets/myDetails";

const ShortSummery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
      {myShortSummery.map((item) => {
        return (
          <div key={item.id} className="flex items-center justify-center p-2">
            <div className="text-3xl  md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl flex items-center justify-center text-[--short-description-number] font-bold">
              <div>{item.value}</div>
              <div>{item.valueIcon}</div>
            </div>
            <div className="text-md  md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mx-2 text-[--short-description-text]">
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
