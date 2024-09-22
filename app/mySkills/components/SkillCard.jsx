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
          <FontAwesomeIcon icon={props.icon} className="text-6xl" />
        </div>
        <div className="text-2xl pl-2">{props.value}</div>
      </div>
      <div className="text-center text-xl text-[--skills-card-title]">
        {props.name}
      </div>
    </div>
  );
};

export default SkillCard;
