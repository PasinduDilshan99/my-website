import Image from "next/image";
import React from "react";
import profileImage from "../../../assets/images/myImage.jpg";
import "../css/myIntroductionImage.css";

const MyIntroductionImage = () => {
  return (
    <div className="flex justify-end items-center abc myImage hover:shadow-lg hover:shadow-[--my-image-shadow-color-hover] ">
      <div className="">
        <Image src={profileImage} />
      </div>
    </div>
  );
};

export default MyIntroductionImage;
