import React from "react";
import { myExperiences } from "../../../assets/myDetails";
import TitleComponent from "./TitleComponent";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import ItemComponent from "@/app/myRecentWorks/components/ItemComponent";

const Experience = () => {
  return (
    <div>
      <div className="mb-5">
        <TitleComponent
          props={{ icon: WorkspacePremiumOutlinedIcon, title: "My Experience" }}
        />
      </div>
      <div className="flex flex-col gap-8">
        {myExperiences.map((myExperience) => {
          return (
            <div key={myExperience.id}>
              <ItemComponent props={myExperience} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
