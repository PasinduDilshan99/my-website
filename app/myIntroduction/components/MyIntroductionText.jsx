import React from "react";
import { MyIntroductionDetails } from "../../../assets/myDetails";
import "../css/myIntroductionText.css";
import MyIntroductionSocialMediaLinks from "./MyIntroductionSocialMediaLinks";
import DownloadCV from "./DownloadCV";

const MyIntroductionText = () => {
  return (
    <div className="flex flex-col gap-4 my-3">
      <div className="text-5xl text-white">{MyIntroductionDetails.myName}</div>
      <div className="titleGradient text-7xl font-bold">
        {MyIntroductionDetails.positionI}
      </div>
      <div className="titleGradient text-7xl font-bold">
        {MyIntroductionDetails.positionII}
      </div>
      <div className="text-white text-2xl max-w-[50%]">
        {MyIntroductionDetails.smallIntroduction}
      </div>
      <div className="flex items-center gap-5">
        <div className="">
          <DownloadCV />
        </div>
        <div>
          <MyIntroductionSocialMediaLinks />
        </div>
      </div>
    </div>
  );
};

export default MyIntroductionText;
