import React from "react";
import MyIntroductionText from "./MyIntroductionText";
import MyIntroductionImage from "./MyIntroductionImage";
import ShortSummery from "./ShortSummery";
import "../css/myIntroduction.css"

const MyIntroduction = () => {
  return (
    <div className="xl:mx-[5%] mx-[3%] flex flex-col ">
      <div className="myIntroductionBubble">
        <div className="flex md:flex-row md:items-center flex-col-reverse">
          <div className="grow w-full">
            <MyIntroductionText />
          </div>
          <div className="w-[60%] flex justify-center items-center">
            <MyIntroductionImage />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <ShortSummery />
      </div>
    </div>
  );
};

export default MyIntroduction;
