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
    <div className="bg-[--recent-works-filter-button-list-bg] text-[--recent-works-filter-button-text] rounded-full lg:max-w-[80%] max-w-full flex gap-5 p-3 px-8 justify-center items-center ">
      {workTypes.map((workType) => (
        <button
          className={`p-2 rounded-full ${selectedType === workType ? 'filterButton text-[--recent-works-filter-button-text-selected]' : 'bg-transparent' } text-sm md:text-lmd lg:text-lg xl:text-xl 2xl:text-2xl`}
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
