import React from "react";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

const ClientComponent = ({ props }) => {
  return (
    <div className="bg-[--client-card-bg] mt-2 mb-7 rounded-lg p-4 gap-3 hover:shadow-xl hover:shadow-[--client-card-shadow-hover] flex flex-col  transition-all duration-300 ease-in-out hover:scale-105">
      <div className="flex justify-between">
        <div className="flex gap-2 text-white">
          <div>
            <props.companyLogo />
          </div>
          <div>{props.companyName}</div>
        </div>
        <div>
          <img src={props.image} width={50} height={50} alt="image" />
        </div>
      </div>
      <div className="text-[--client-card-icon] ">
        <LabelImportantIcon className="text-3xl" />
      </div>
      <div className="text-lg text-[--client-text]">{props.description}</div>
      <div className="flex flex-col text-lg text-[--client-text]">
        <div className="font-semibold text-white">{props.name}</div>
        <div>{props.position}</div>
      </div>
    </div>
  );
};

export default ClientComponent;
