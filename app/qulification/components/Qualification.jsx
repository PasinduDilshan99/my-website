import React from "react";
import Experience from "./Experience";
import Education from "./Education";

const Qualification = () => {
  return (
    <div className="flex bg-black text-white p-10 justify-evenly">
      <Experience />
      <Education />
    </div>
  );
};

export default Qualification;
