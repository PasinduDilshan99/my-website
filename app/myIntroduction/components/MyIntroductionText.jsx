import React from "react";
import { MyIntroductionDetails } from "../../../assets/myDetails";
import "../css/myIntroductionText.css";
import MyIntroductionSocialMediaLinks from "./MyIntroductionSocialMediaLinks";
import DownloadCV from "./DownloadCV";

const MyIntroductionText = () => {
  return (
    <div className="flex flex-col gap-6 my-3  md:text-left text-center">
      <div className="lg:text-5xl md:text-4xl text-3xl text-[--introduction-name]">
        {MyIntroductionDetails.myName}
      </div>
      <div className="lg:text-7xl md:text-6xl text-5xl">
        <div className="titleGradient font-bold">
          {MyIntroductionDetails.positionI}
        </div>
        <div className="titleGradient font-bold">
          {MyIntroductionDetails.positionII}
        </div>
      </div>
      <div className="text-[--introduction-description] text-xl lg:text-3xl md:text-2xl lg:max-w-[80%]">
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
