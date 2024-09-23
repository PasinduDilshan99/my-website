import React from "react";
import { SocialMediaLinks } from "../../../assets/socialMedia";
import '../css/myIntroductionSocialMediaLinks.css'

const MyIntroductionSocialMediaLinks = () => {
  return (
    <div className="text-[--social-media-icon-color]">
      {SocialMediaLinks.map((socialMediaLink) => {
        return (
          <a
            key={socialMediaLink.id}
            href={socialMediaLink.link}
            className="abc p-2 mx-2 rounded-full socialMediaIconBorder"
          >
            <socialMediaLink.icon className="scale-110 hover:scale-125 transition-transform duration-300 ease"/>
          </a>
        );
      })}
    </div>
  );
};

export default MyIntroductionSocialMediaLinks;
