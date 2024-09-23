import React from "react";
import ContactInformation from "./ContactInformation";
import FooterLinks from "./FooterLinks";

const FooterRight = () => {
  return (
    <div className="">
      <ContactInformation />
      <hr className="border-0 h-[1px] bg-[--footer-top-horizontal-line]" />
      <FooterLinks />
    </div>
  );
};

export default FooterRight;
