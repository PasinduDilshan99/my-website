import React from "react";
import "../css/topUpText.css";

const TopUpText = () => {
  return (
    <div className="bg-cover bg-center">
      <div className="flex justify-center min-w-[100%] items-center font-extrabold">
        <svg width="100%" height="100%" viewBox="0 0 200 200">
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="topUpText"
          >
            HI
          </text>
        </svg>
      </div>
    </div>
  );
};

export default TopUpText;
