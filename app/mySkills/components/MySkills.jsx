import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faAngular,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode, faCogs } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import TitleComponent from "./TitleComponent";
import SkillCard from "./SkillCard";

const MySkills = () => {
  const mySkills = [
    { id: 1, icon: faHtml5, value: "90%", name: "HTML", color: "#E34F26" }, // HTML color
    { id: 2, icon: faCss3Alt, value: "90%", name: "CSS", color: "#1572B6" }, // CSS color
    {
      id: 3,
      icon: faJsSquare,
      value: "90%",
      name: "JavaScript",
      color: "#F7DF1E",
    }, // JavaScript color
    { id: 4, icon: faCode, value: "90%", name: "TypeScript", color: "#007ACC" }, // TypeScript color
    { id: 5, icon: faReact, value: "90%", name: "React Js", color: "#61DAFB" }, // React color
    { id: 6, icon: faReact, value: "90%", name: "Next Js", color: "#000000" }, // Next.js (black)
    { id: 7, icon: faAngular, value: "90%", name: "Angular", color: "#DD0031" }, // Angular color
    {
      id: 8,
      icon: faCogs,
      value: "90%",
      name: "Spring Boot",
      color: "#6DB33F",
    }, // Spring Boot color
    { id: 9, icon: faDatabase, value: "90%", name: "SQL", color: "#FF5733" }, // SQL color
    {
      id: 10,
      icon: faDatabase,
      value: "90%",
      name: "Oracle",
      color: "#F80000",
    }, // Oracle color
  ];

  return (
    <div className="flex flex-col items-center text-center my-20 gap-5">
      <div>
        <TitleComponent props={{ title: "My Skills" }} />
      </div>
      <div className="text-[--skills-text] text-xl ">
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and your customers.
      </div>
      <div className="flex gap-5 flex-wrap">
        {mySkills.map((mySkill) => {
          return (
            <div key={mySkill.id} className="min-w-[20%]">
              <SkillCard
                props={{
                  ...mySkill,
                  iconComponent: (
                    <FontAwesomeIcon
                      icon={mySkill.icon}
                      style={{ color: mySkill.color, fontSize: "3rem" }}
                    />
                  ),
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MySkills;
