import React from "react";
import "../css/myRecentWorks.css";

const MyRecentWorks = () => {
  return (
    <div className="recentWorksBg text-white px-10 py-20 min-h-screen">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center items-center flex-col gap-5">
          <div className="serviceGradient text-6xl text-center font-bold">
            My Recent Works
          </div>
          <div className="text-center text-lg max-w-[40%]">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default MyRecentWorks;
