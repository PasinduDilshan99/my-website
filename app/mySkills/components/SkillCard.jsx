"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillCard = ({ props }) => {
  return (
    <div
      className=""
      style={{
        transition: "color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = `${props.color}`)}
      onMouseLeave={(e) => (e.currentTarget.style.color = `${""}`)}
    >
      <div className="bg-[--skills-card-bg] hover:bg-[--skills-card-bg-hover] hover:scale-105 hover:border-2 hover:border-[--skills-card-border-hover] flex flex-col justify-center items-center gap-3 min-h-40 rounded-3xl transition-all duration-300 ease-out">
        <div>
          <FontAwesomeIcon
            icon={props.icon}
            className="text-6xl xl:text-7xl "
          />
        </div>
        <div className="text-2xl  lg:text-3xl 2xl:text-4xl pl-2 font-bold">
          {props.value}
        </div>
      </div>
      <div className="text-center text-xl  lg:text-2xl 2xl:text-3xl text-[--skills-card-title]">
        {props.name}
      </div>
    </div>
  );
};

export default SkillCard;
