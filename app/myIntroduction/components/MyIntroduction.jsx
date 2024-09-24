import React from "react";
import MyIntroductionText from "./MyIntroductionText";
import MyIntroductionImage from "./MyIntroductionImage";
import ShortSummery from "./ShortSummery";
import "../css/myIntroduction.css";

const MyIntroduction = () => {
  return (
    <div className="3xl:mx-[20%] 2xl:mx-[15%] xl:mx-[10%] lg:mx-[7%] mx-[5%] flex flex-col">
      <div className="myIntroductionBubble">
        <div className="flex md:flex-row md:items-center flex-col-reverse items-center gap-10">
          <div className="grow w-full">
            <MyIntroductionText />
          </div>
          <div className="2xl:w-[40%] xl:w-[44%] lg:w-[48%] md:w-[50%] sm:w-[45%] w-[60%] flex justify-center items-center">
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
