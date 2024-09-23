"use client";
import React, { useEffect, useState } from "react";
import { recentProjects } from "../../../assets/recentProject";
import "../css/filterButton.css";

const FilterButton = ({ selectedType, setSelectType }) => {
  const [workTypes, setWorkTypes] = useState(["all"]);

  useEffect(() => {
    const uniqueWorkTypes = [
      ...new Set(recentProjects.map((project) => project.type)),
    ];

    setWorkTypes((prevWorkTypes) => ["all", ...uniqueWorkTypes]);
  }, []);

  return (
    <div className="bg-black rounded-full lg:max-w-[40%] max-w-full flex gap-5 p-3 px-8 justify-center items-center">
      {workTypes.map((workType) => (
        <button
          className={`p-2 rounded-full ${selectedType === workType ? 'filterButton' : 'bg-transparent'}`}
          key={workType}
          onClick={() => setSelectType(workType)}
        >
          {workType}
        </button>
      ))}
    </div>
  );
};

export default FilterButton;
