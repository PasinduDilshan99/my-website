"use client";
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
import Slider from "react-slick";

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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center py-20 gap-5 bg-[--skills-bg]">
      <div>
        <TitleComponent props={{ title: "My Skills" }} />
      </div>
      <div className="text-[--skills-text] text-xl max-w-[60%] text-center">
        create mode 100644 app/myQualityServices/css/myQualityServiceTable.css
        create mode 100644 app/myQualityServices/css/myQualityServiceTable.css
        create mode 100644 app/myQ
      </div>
      <div className="max-w-[80vw]">
        <Slider {...settings}>
          {mySkills.map((mySkill) => {
            return (
              <div key={mySkill.id} className="px-4 my-5">
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
        </Slider>
      </div>
    </div>
  );
};

export default MySkills;
