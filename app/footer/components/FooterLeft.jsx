import Image from "next/image";
import React from "react";
import FooterSocialMediaLinks from "./FooterSocialMediaLinks";
import { myDetails } from "../../../assets/myDetails";

const FooterLeft = () => {
  return (
    <div className="flex flex-col gap-4 p-5">
      <div className="flex rounded-xl text-[--footer-logo] hover:text-[--footer-logo-hover]  md:rounded-lg transition-transform duration-300 hover:scale-105">
        <div className="justify-center hidden md:flex content-center">
          <Image
            src="/logo.webp"
            width={35}
            height={35}
            alt="logo"
            className="mr-4"
          />
        </div>
        <div
          className="justify-center content-center lg:text-xl text-lg hover:font-semibold duration-100"
          href="/"
        >
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${myDetails.email}&su=${myDetails.emailSubject}y&body=Dear%20${myDetails.firstname},%0D%0A%0D%0A${myDetails.sampleEmailMessage}.%0D%0A%0D%0A${myDetails.emailComplimentaryClose},%0D%0A%0D%0A${myDetails.emailUserName}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {myDetails.email}
          </a>
        </div>
      </div>
      <div className="text-lg">
        We have been most trusted web design agency since 25+ years.
      </div>
      <div className="mt-4">
        <FooterSocialMediaLinks />
      </div>
    </div>
  );
};

export default FooterLeft;
