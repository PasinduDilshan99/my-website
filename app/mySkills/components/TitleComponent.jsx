import React from "react";
import "../css/titleComponent.css";

const TitleComponent = ({ props }) => {
  return (
    <div className="p-5 text-6xl font-bold gap-4">
      <div className="titleComponent">{props.title}</div>
    </div>
  );
};

export default TitleComponent;
