import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import "../css/downloadCV.css";

const DownloadCV = () => {
  return (
    <div className="text-lg  md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl downloadCvButton rounded-3xl p-2 px-4">
      Download CV <DownloadIcon />
    </div>
  );
};

export default DownloadCV;
