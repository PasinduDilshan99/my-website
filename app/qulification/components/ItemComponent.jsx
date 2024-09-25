import React from "react";
import "../css/itemComponent.css";

const ItemComponent = ({ props }) => {
  return (
    <div className="itemComponent p-4 rounded-2xl flex flex-col gap-2 hover:shadow-md hover:shadow-[--card-component-shadow-hover]">
      <div className="text-[--card-component-duration] hover:text-[--card-component-duration-hover]  text-md md:text-lg  xl:text-xl">
        {props.duration}
      </div>
      <div className="text-xl  md:text-2xl xl:text-3xl font-bold uppercase text-[--card-component-title]">
        {props.title}
      </div>
      <div className="text-[--card-component-address] text-md md:text-lg  xl:text-xl">
        {props.address}
      </div>
    </div>
  );
};

export default ItemComponent;
