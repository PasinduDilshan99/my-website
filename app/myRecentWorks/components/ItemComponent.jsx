import React from "react";
import "../css/itemComponent.css";

const ItemComponent = ({ props }) => {
  return (
    <div className="itemComponent p-4 rounded-2xl flex flex-col gap-2">
      <div className="text-[--card-component-duration] hover:text-[--card-component-duration-hover]  text-xl">
        {props.duration}
      </div>
      <div className="text-2xl font-bold uppercase text-[--card-component-title]">
        {props.title}
      </div>
      <div className="text-[--card-component-address]">{props.address}</div>
    </div>
  );
};

export default ItemComponent;
