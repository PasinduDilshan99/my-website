import React from "react";
import { SocialMediaLinks } from "../../../assets/socialMedia";
import "../css/footerSocialMediaLinks.css";

const FooterSocialMediaLinks = () => {
  return (
    <div className="text-[--footer-social-media-icon-color]">
      {SocialMediaLinks.map((socialMediaLink) => {
        return (
          <a
            key={socialMediaLink.id}
            href={socialMediaLink.link}
            className="p-2 mx-2 rounded-full socialMediaIconBorder"
          >
            <socialMediaLink.icon className="scale-110 hover:scale-125 transition-transform duration-300 ease" />
          </a>
        );
      })}
    </div>
  );
};

export default FooterSocialMediaLinks;
