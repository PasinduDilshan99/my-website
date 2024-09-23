import React from "react";
import "../css/contactDetailsCard.css";

const ContactDetailsCard = ({ props }) => {
  return (
    <div className="text-white flex gap-5 p-5 items-center">
      <div className="contactDetailsCard p-2 rounded-full scale-125">
        <props.icon className="" />
      </div>
      <div className=" flex flex-col gap-1">
        <div className="text-lg">{props.title}</div>
        <div className="text-xl font-semibold hover:font-bold hover:cursor-pointer hover:text-[--contact-details-text-hover] transition-all duration-300 ease-out">
          <div>{props.text1}</div>
          <div>{props.text2}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsCard;
