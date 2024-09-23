import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <div className="text-white pt-20 pb-10">
      <FooterTop />
      <hr className="border-0 h-1 bg-[--footer-horizontal-line] m-2 mb-5" />
      <FooterBottom />
    </div>
  );
};

export default Footer;
