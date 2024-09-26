import React from "react";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

const ClientComponent = ({ props }) => {
  return (
    <div className="bg-[--client-story-card-bg] mt-2 mb-7 rounded-lg p-4 gap-3 hover:shadow-xl hover:shadow-[--client-story-card-shadow-hover] flex flex-col  transition-all duration-300 ease-in-out hover:scale-105">
      <div className="flex justify-between">
        <div className="flex gap-2 text-[--client-story-card-company-logo] text-lg  md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          <div>
            <props.companyLogo />
          </div>
          <div>{props.companyName}</div>
        </div>

        <div>
          <img src={props.image} width={50} height={50} alt="image" />
        </div>
      </div>

      <div className="text-[--client-story-card-icon] ">
        <LabelImportantIcon className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl" />
      </div>

      <div className="text-md lg:text-lg xl:text-xl l text-[--client-story-text]">
        {props.description}
      </div>
      <div className="flex flex-col text-[--client-story-text]">
        <div className="font-semibold text-[--client-story-card-name] text-lg md:text-xl  xl:text-2xl 2xl:text-3xl">
          {props.name}
        </div>
        <div className=" text-sm md:text-md lg:text-lg xl:text-xl ">
          {props.position}
        </div>
      </div>
    </div>
  );
};

export default ClientComponent;
