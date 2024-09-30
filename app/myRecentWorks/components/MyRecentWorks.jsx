"use client";
import React, { useState } from "react";
import "../css/myRecentWorks.css";
import FilterButton from "./FilterButton";
import RecentProjectComponent from "./RecentProjectComponent";
import { recentProjects } from "../../../assets/recentProject";


const MyRecentWorks = () => {
  const [selectedType, setSelectType] = useState("all");

  return (
    <div className="recentWorksBg text-[--recent-works-text] px-10 py-20 ">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center items-center flex-col gap-5">
          <div className="serviceGradient text-3xl  md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center font-bold">
            My Recent Works
          </div>
          <div className="text-center text-md  md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl max-w-[85%]">
            We put your ideas and thus your wishes in the
          </div>
        </div>
        <div className="flex justify-center">
          <FilterButton selectedType={selectedType} setSelectType={setSelectType} />
        </div>
        <div className="flex flex-wrap justify-center content-center">
          {recentProjects
            .filter((recentProject) =>
              selectedType === "all" ? true : recentProject.type === selectedType
            )
            .map((recentProject) => (
              <div className="m-3" key={recentProject.id}>
                <RecentProjectComponent props={recentProject} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyRecentWorks;
