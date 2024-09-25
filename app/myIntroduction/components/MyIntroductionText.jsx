import React from "react";
import { MyIntroductionDetails } from "../../../assets/myDetails";
import "../css/myIntroductionText.css";
import MyIntroductionSocialMediaLinks from "./MyIntroductionSocialMediaLinks";
import DownloadCV from "./DownloadCV";

const MyIntroductionText = () => {
  return (
    <div className="flex flex-col gap-6 my-3  md:text-left text-center">
      <div
        className="text-2xl  md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl
 text-[--introduction-name]"
      >
        {MyIntroductionDetails.myName}
      </div>
      <div className="text-3xl  md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
        <div className="titleGradient font-bold">
          {MyIntroductionDetails.positionI}
        </div>
        <div className="titleGradient font-bold">
          {MyIntroductionDetails.positionII}
        </div>
      </div>
      <div className="text-[--introduction-description] text-md  md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl lg:max-w-[80%]">
        {MyIntroductionDetails.smallIntroduction}
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-5">
        <div className="">
          <DownloadCV />
        </div>
        <div className="flex justify-center md:justify-start ">
          <MyIntroductionSocialMediaLinks />
        </div>
      </div>
    </div>
  );
};

export default MyIntroductionText;
