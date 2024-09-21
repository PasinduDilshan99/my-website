import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import '../css/downloadCV.css'

const DownloadCV = () => {
  return (
    <div className="text-xl downloadCvButton rounded-3xl p-2 px-4">
      Download CV <DownloadIcon />
    </div>
  );
};

export default DownloadCV;
