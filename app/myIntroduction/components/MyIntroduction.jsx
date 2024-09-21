import React from "react";
import MyIntroductionText from "./MyIntroductionText";
import MyIntroductionImage from "./MyIntroductionImage";

const MyIntroduction = () => {
  return (
    <div className="abc md:mx-[5%] xl:mx-[10%] mx-[3%]">
      <div className="flex md:flex-row flex-col-reverse">
        <div>
          <MyIntroductionText />
        </div>
        <div>
          <MyIntroductionImage />
        </div>
      </div>
    </div>
  );
};

export default MyIntroduction;
