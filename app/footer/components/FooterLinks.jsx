import React from "react";
import { myServices, quickLinks } from "../../../assets/myServices";
import "../css/footerLinks.css";

const FooterLinks = () => {
  return (
    <div className="flex py-5 md:justify-evenly flex-col md:flex-row ">
      {/* services  */}
      <div>
        <div className="text-lg md:text-xl xl:text-2xl py-4 text-[--footer-links-title] ml-[35%] lg:ml-0">
          Services
        </div>
        <div className="ml-[25%] lg:ml-0">
          {myServices.map((myService) => (
            <div key={myService.id}>
              <div className="py-2 text-md lg:text-lg 2xl:text-xl text-[--footer-links-text] hover:text-[--footer-links-text-hover] transition-colors duration-300">
                {myService.service}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Quick links  */}
      <div>
        <div className="text-lg md:text-xl xl:text-2xl py-4 text-[--footer-links-title] ml-[35%] lg:ml-0">
          Quick Links
        </div>
        <div className="ml-[25%] lg:ml-0">
          {quickLinks.map((quickLink) => (
            <div key={quickLink.id}>
              <div className="py-2 text-md lg:text-lg 2xl:text-xl text-[--footer-links-text] hover:text-[--footer-links-text-hover] transition-colors duration-300">
                {quickLink.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* news letter  */}
      <div>
        <div className="text-lg md:text-xl xl:text-2xl py-4 text-[--footer-links-title] ml-[35%] lg:ml-0">
          Newsletter
        </div>
        <div className="py-2 flex justify-center">
          <input
            type="text"
            name="name"
            placeholder="Subscribe"
            className="bg-[--footer-input-bg] text-[--footer-input-text] px-4 py-2 rounded-md border-2 border-[--footer-input-border] focus:border-2 focus:border-[--footer-input-active-border] text-md lg:text-lg 2xl:text-xl"
          />
        </div>
        <div className="text-md lg:text-lg 2xl:text-xl flex lg:mx-0 mx-[20%] justify-center ">
          <button className="footerBtn rounded-md px-4 py-2 w-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
