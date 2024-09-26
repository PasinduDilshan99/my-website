import React from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const FooterTop = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center">
      <div className="xl:w-[30%]">
        <FooterLeft />
      </div>
      <div className="xl:w-[70%] w-full">
        <FooterRight />
      </div>
    </div>
  );
};

export default FooterTop;
