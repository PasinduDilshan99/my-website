import React from "react";
import "../css/titleComponent.css";

const TitleComponent = ({ props }) => {
  return (
    <div className="text-3xl  md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
      <div className="titleComponent">{props.title}</div>
    </div>
  );
};

export default TitleComponent;
