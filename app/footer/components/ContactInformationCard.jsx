import React from "react";
import "../css/contactInformationCard.css";

const ContactInformationCard = ({ props }) => {
  return (
    <div className="text-[--footer-contact-information-text] flex gap-5 p-5 items-center">
      <div className="text-[--footer-contact-information-icon] p-2 rounded-full scale-125">
        <props.icon className="" />
      </div>
      <div className=" flex flex-col gap-1">
        <div className="text-sm md:text-md xl:text-lg">{props.title}</div>
        <div className="text-md md:text-lg xl:text-xl font-semibold hover:font-bold hover:cursor-pointer hover:text-[--contact-details-text-hover] transition-all duration-300 ease-out">
          <div>{props.text1}</div>
          <div>{props.text2}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformationCard;
