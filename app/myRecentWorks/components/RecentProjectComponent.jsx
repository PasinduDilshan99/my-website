"use client";
import React, { useEffect, useRef, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import "../css/myRecentWorks.css";

const RecentProjectComponent = ({ props }) => {
  const [isView, setIsView] = useState({
    image: false,
    icon: false,
    iconText: false,
    title: false,
    text: false,
    btn: false,
  });

  const refs = {
    image: useRef(null),
    icon: useRef(null),
    iconText: useRef(null),
    title: useRef(null),
    text: useRef(null),
    btn: useRef(null),
  };

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsView((prevState) => ({
              ...prevState,
              [entry.target.dataset.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.keys(refs).forEach((key) => {
      if (refs[key].current) {
        observer.observe(refs[key].current);
      }
    });

    return () => {
      Object.keys(refs).forEach((key) => {
        if (refs[key].current) {
          observer.unobserve(refs[key].current);
        }
      });
    };
  }, []);
  return (
    <div
      className={`relative overflow-hidden border-2 border-[--recent-works-card-label-background] hover:border-[--recent-works-card-label-background-hover] background-black-shadow md:w-[400px] md:h-[390px] md:hover:w-[410px] md:hover:h-[400px] w-[300px] h-[290px] hover:w-[310px] hover:h-[300px] transition-all duration-300 hover:shadow-xl hover:shadow-[--recent-works-card-hover-shadow] ${
        isView.image ? "showItem popUpText" : "hideItem"
      }`}
      style={{
        backgroundImage: `url("../../../assets/images/project-02.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      ref={refs.image}
      data-id="image"
    >
      <div className="flex z-10 justify-evenly  bg-[--recent-works-card-label-background]  hover:bg-gradient-to-t hover:from-[--recent-works-card-label-background-hover] hover:to-transparent absolute bottom-10 w-full transition-colors duration-500 p-2">
        <div>
          <div className="text-[--recent-works-card-label-title] hover:text-[--recent-works-card-label-title-hover] flex text-lg">
            <div
              className={`text-lg lg:text-xl xl:text-2xl 2xl:text-3xl ${
                isView.iconText
                  ? "showItem textComeFromRightToLeft"
                  : "hideItem"
              }`}
              ref={refs.iconText}
              data-id="iconText"
            >
              {props.title}
            </div>
          </div>
          <div
            className={`text-sm md:text-lmd lg:text-lg xl:text-xl text-[--recent-works-card-label-text] hover:text-[--recent-works-card-label-text-hover] ${
              isView.text ? "showItem textComeFromLeftToRight" : "hideItem"
            }`}
            ref={refs.text}
            data-id="text"
          >
            {props.description}
          </div>
        </div>
        <div className=" flex items-center">
          <div
            className={`bg-[--recent-works-card-label-button] cursor-pointer rounded-full md:w-12 md:h-12 w-10 h-10 flex justify-center items-center border-[--recent-works-card-label-border] border-2 transition-all duration-300 hover:w-14 hover:h-14 ${
              isView.btn ? "showItem textComeFromRightToLeft" : "hideItem"
            }`}
            ref={refs.btn}
            data-id="btn"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div>
              {hover ? (
                <div>
                  <ArrowForwardIcon className="hover:scale-150 transition-transform duration-300 delay-300" />
                </div>
              ) : (
                <div className="circleBubble bg-[--recent-works-card-label-button-circle] rounded-full"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjectComponent;
