import React from "react";
import Experience from "./Experience";
import Education from "./Education";

const Qualification = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[--qualification-bg] text-[--qualification-text] p-10 pb-20 justify-evenly">
      <Experience /> 
      <Education />
    </div>
  );
};

export default Qualification;
