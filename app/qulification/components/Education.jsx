import React from "react";
import TitleComponent from "./TitleComponent";
import ItemComponent from "@/app/qulification/components/ItemComponent";
import { myEducations } from "../../../assets/myDetails";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

const Education = () => {
  return (
    <div>
      <div className="mb-5">
        <TitleComponent
          props={{ icon: SchoolOutlinedIcon, title: "My Education" }}
        />
      </div>
      <div className="flex flex-col gap-8">
        {myEducations.map((myEducation) => {
          return (
            <div key={myEducation.id}>
              <ItemComponent props={myEducation} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
