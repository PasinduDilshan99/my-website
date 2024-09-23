import React from "react";
import { myServices, quickLinks } from "../../../assets/myServices";
import "../css/footerLinks.css";

const FooterLinks = () => {
  return (
    <div className="flex py-5 justify-between">
      <div>
        <div className="text-xl py-4 text-[--footer-links-title]">Services</div>
        <div>
          {myServices.map((myService) => (
            <div key={myService.id}>
              <div className="py-2 text-lg text-[--footer-links-text] hover:text-[--footer-links-text-hover] transition-colors duration-300">
                {myService.service}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="text-xl py-4 text-[--footer-links-title]">
          Quick Links
        </div>
        <div>
          {quickLinks.map((quickLink) => (
            <div key={quickLink.id}>
              <div className="py-2 text-lg text-[--footer-links-text] hover:text-[--footer-links-text-hover] transition-colors duration-300">
                {quickLink.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="text-xl py-4 text-[--footer-links-title]">
          Newsletter
        </div>
        <div className="py-2">
          <input
            type="text"
            name="name"
            placeholder="Subscribe"
            className="bg-[--footer-input-bg] text-[--footer-input-text] px-4 py-2 rounded-md border-2 border-[--footer-input-border] focus:border-2 focus:border-[--footer-input-active-border]"
          />
        </div>
        <div className="w-full">
          <button className="footerBtn rounded-md px-4 py-2 w-full">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
