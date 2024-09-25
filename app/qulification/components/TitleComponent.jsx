import React from "react";
import "../css/titleComponent.css";

const TitleComponent = ({ props }) => {
  return (
    <div className="flex p-5 text-3xl  md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold gap-4">
      <div className="titleComponent">
        <props.icon className="scale-150 text-[--title-component-start]" />
      </div>
      <div className="titleComponent">{props.title}</div>
    </div>
  );
};

export default TitleComponent;
