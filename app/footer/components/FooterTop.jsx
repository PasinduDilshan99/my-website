import React from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const FooterTop = () => {
  return (
    <div className="flex items-center">
      <div className="w-[30%]">
        <FooterLeft />
      </div>
      <div>
        <FooterRight />
      </div>
    </div>
  );
};

export default FooterTop;
